#Reference - https://towardsdatascience.com/how-to-extract-data-from-the-twitter-api-using-python-b6fbd7129a33

import os
import tweepy
from dotenv import load_dotenv
import requests
import html
import urllib3
import shutil
from pathlib import Path

load_dotenv()

pool = urllib3.PoolManager()

TWITTER_BEARER_TOKEN = os.environ["TWITTER_BEARER_TOKEN"]
MASTODON_ACCESS_TOKEN = os.environ["MASTODON_ACCESS_TOKEN"]
MASTODON_WEBHOOK_URL = os.environ["MASTODON_WEBHOOK_URL"]
MASTODON_MEDIA_UPLOAD_URL = os.environ["MASTODON_MEDIA_UPLOAD_URL"]

# list of exceptions if we wanna handle them
# EXCEPTIONS = (tweepy.HTTPException, tweepy.Unauthorized, tweepy.Forbidden, tweepy.NotFound, tweepy.TwitterServerError)

class MyStreamer(tweepy.StreamingClient):

    def on_connect(self):
        # notify when user is connected to twitter
        print("Connected to Twitter API")

    def on_tweet(self, tweet):
        return super().on_tweet(tweet)

    def on_response(self, response):
        i = 0
        media_files = []
        if 'media' in response.includes:
            for image in response.includes['media']:
                #handling png and jpg formats
                if response.includes['media'][i]['url'].endswith('png'):
                    pic_name = "pic{}.png".format(i)
                else:
                    pic_name = "pic{}.jpg".format(i)

                link = response.includes['media'][i]['url']
                i+=1
                filename = os.path.join("/home/tuna/Downloads/tweetpics/", pic_name)
                with pool.request('GET', link, preload_content=False) as resp, open(filename, 'wb') as out:
                    shutil.copyfileobj(resp, out)
                media_files.append(pic_name)
            resp.release_conn()
            media_ids = upload_media_to_mastodon(media_files)
        elif 'media' not in response.includes:
            media_ids = None
        toot_on_mastodon(response.data, media_ids)
        return super().on_response(response)

    def on_request_error(self, status_code):
        print(status_code)
        return super().on_request_error(status_code)


def upload_media_to_mastodon(media_files):
    files_root = Path("/home/tuna/Downloads/tweetpics/")
    media_ids = []
    for file in media_files:
        file_with_full_path = files_root / file
        files = {
            'file': (file, file_with_full_path.open('rb'), 'application/octet-stream')
        }
        result = requests.post(MASTODON_MEDIA_UPLOAD_URL,
                files=files,
                headers={'Authorization': 'Bearer {}'.format(MASTODON_ACCESS_TOKEN)})
        json_data = result.json()
        media_id = json_data['id']
        media_ids.append(media_id)
    return media_ids

def toot_on_mastodon(tweet, media_ids):
    decoded_tweet = html.unescape(tweet['data']['text'])
    headers = {'Authorization': 'Bearer {}'.format(MASTODON_ACCESS_TOKEN)}
    payload = {'status': decoded_tweet, 'media_ids[]': media_ids}

    try:
        mastodon_response = requests.post(
            MASTODON_WEBHOOK_URL, data=payload, headers=headers)
        mastodon_response.raise_for_status()
        print("Tweet is sent to mastodon!")
    except Exception as e:
        print('Error: {}'.format(e))


if __name__ == '__main__':
    while True:
        try:
            streamer = MyStreamer(TWITTER_BEARER_TOKEN)
            # rules are managed from a different script
            # streamer.add_rules(tweepy.StreamRule("from:dSocialCommons_ -is:retweet"))
            streamer.filter(expansions=['attachments.media_keys'], media_fields=['url','preview_image_url'])
        except KeyboardInterrupt:
            #not sure if this is a correct way to stop the stream
            break