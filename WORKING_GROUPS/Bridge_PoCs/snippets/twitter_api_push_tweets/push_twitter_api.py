#Reference - https://github.com/twitterdev/Twitter-API-v2-sample-code/blob/main/Filtered-Stream/filtered_stream.py

import requests
import os
import json

BEARER_TOKEN = os.environ.get['BEARER_TOKEN']
MATRIX_ACCESS_TOKEN = os.environ.get['MATRIX_ACCESS_TOKEN']
MATRIX_WEBHOOK_URL = os.environ.get['MATRIX_WEBHOOK_URL']
MATRIX_ROOM_CODE = os.environ.get['MATRIX_ROOM_CODE']
MATRIX_TRAILING_URL = os.environ.get['MATRIX_TRAILING_URL']
MATRIX_URL = MATRIX_WEBHOOK_URL + MATRIX_ROOM_CODE + MATRIX_TRAILING_URL

def bearer_oauth(r):
    """
    Method required by bearer token authentication.
    """

    r.headers['Authorization'] = 'Bearer {}'.format(BEARER_TOKEN)
    r.headers['User-Agent'] = 'v2FilteredStreamPython'
    return r


def get_rules():
    response = requests.get(
        "https://api.twitter.com/2/tweets/search/stream/rules", auth=bearer_oauth
    )
    if response.status_code != 200:
        raise Exception(
            "Cannot get rules (HTTP {}): {}".format(response.status_code, response.text)
        )
    print(json.dumps(response.json()))
    return response.json()


def get_stream(set):
    # session = requests.Session() - Do we use session or not?
    response = requests.get(
        "https://api.twitter.com/2/tweets/search/stream", auth=bearer_oauth, stream=True,
    )
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(
            "Cannot get stream (HTTP {}): {}".format(
                response.status_code, response.text
            )
        )
    for response_line in response.iter_lines():
        if response_line:
            json_response = json.loads(response_line)
            print(json.dumps(json_response, indent=4, sort_keys=True))
            return json_response


def main():
    rules = get_rules()
    tweet = get_stream(rules)
    if tweet:
        headers = {'Authorization': 'Bearer {}'.format(MATRIX_ACCESS_TOKEN)}
        payload = {'body': tweet['data']['text'], 'msgtype': 'm.text'}

        try:
            matrix_response = requests.post(
                MATRIX_URL, data=json.dumps(payload), headers=headers)
            matrix_response.raise_for_status()
            print("Tweet is sent to matrix!")
        except:
            print("Could not send to matrix!")
    
    """
    TODO
    - keep the connection alive after sending to matrix!
    - make the payload to be able to handle links and media attachments
    """


if __name__ == "__main__":
    main()