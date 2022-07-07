#Reference - https://towardsdatascience.com/how-to-extract-data-from-the-twitter-api-using-python-b6fbd7129a33

import os
import tweepy
from dotenv import load_dotenv
import requests

load_dotenv()

bearer_token = os.environ["TWITTER_BEARER_TOKEN"]
MASTODON_ACCESS_TOKEN = os.environ["MASTODON_ACCESS_TOKEN"]
MASTODON_WEBHOOK_URL = os.environ["MASTODON_WEBHOOK_URL"]

EXCEPTIONS = (tweepy.HTTPException, tweepy.Unauthorized, tweepy.Forbidden, tweepy.NotFound, tweepy.TwitterServerError)

class MyStreamer(tweepy.StreamingClient):
    def on_tweet(self, tweet):
        try:
            toot_on_mastodon(tweet)
        except EXCEPTIONS as e:
            print(e)

def toot_on_mastodon(tweet):
    headers = {'Authorization': 'Bearer {}'.format(MASTODON_ACCESS_TOKEN)}
    payload = {'status': tweet['data']['text']}

    try:
        mastodon_response = requests.post(
            MASTODON_WEBHOOK_URL, data=payload, headers=headers)
        mastodon_response.raise_for_status()
        print("Tweet is sent to mastodon!")
    except:
        print("Could not send to mastodon!")

streamer = MyStreamer(bearer_token)
streamer.add_rules(tweepy.StreamRule("from:dsocialcommons -is:retweet"))

streamer.filter()