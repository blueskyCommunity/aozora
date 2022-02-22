import requests
import json
import logging
import argparse
import os

logger = logging.getLogger(__name__)

WC_TOKEN_URL = os.environ.get('WC_TOKEN_URL')
MASTODON_ACCESS_TOKEN = os.environ.get('MASTODON_ACCESS_TOKEN')

parser = argparse.ArgumentParser()
parser.add_argument('--username', dest='username')
parser.add_argument('--password', dest='password')
par = parser.parse_args()

pushed = 0
not_pushed = 0

wc_creds = {'username': par.username, 'password': par.password}
wc_headers = {'Content-Type': 'application/json'}
try:
    wc_request = requests.post(WC_TOKEN_URL, data=json.dumps(wc_creds), headers=wc_headers, timeout=20)
    print("tried logging into wc db and result was {}".format(wc_request.status_code))

    wc_token = wc_request.json()['access']
    offer_headers = {'Authorization': 'Bearer {}'.format(wc_token)}
    try:
        offer_export = requests.get('https://platform.whatscookin.us/home/?circle=bluesky-community', headers=offer_headers, timeout=20)
        print("tried exporting offers and result was {}".format(offer_export.status_code))
        for offer in offer_export.json():
            if offer['active_circle_name'] == 'bluesky-community':
                offer_string = """This is an event from {} circle at whatscookin.
Event link : https://join.whatscookin.us/offer/{}
Event title : {}
Event owner : {}
Description : {}
Meeting Link : {}""".format(
    offer["active_circle_name"],offer["id"], offer["title"], offer["by"], offer["desc"], offer["meeting_link"])
                headers = {"Authorization": "Bearer {}".format(MASTODON_ACCESS_TOKEN)}
                payload = {"status": offer_string}
                try:
                    with requests.Session() as s:
                        response = s.post("`https://mastodon.blueskycommunity.net/api/v1/statuses`", data=payload, headers=headers, timeout=15)
                        if response.status_code == 200:
                            pushed += 1
                        else:
                            not_pushed += 1
                        print(response.status_code)
                except Exception as e:
                    print("couldn't push to mastodon and error is {}".format(e))
    except:
        print("could not get offers. status code = {}".format(offer_export.status_code))
    
except:
    print("couldn't log into wc db. status code is {}".format(wc_request.status_code))

print("{} offers were pushed and {} were not pushed".format(pushed, not_pushed))


















