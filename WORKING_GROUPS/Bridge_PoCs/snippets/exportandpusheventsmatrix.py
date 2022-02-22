import requests
import json
import logging
import argparse
import os

logger = logging.getLogger(__name__)

WC_TOKEN_URL = os.environ.get('WC_TOKEN_URL')
MATRIX_ACCESS_TOKEN = os.environ.get('MATRIX_ACCESS_TOKEN')

parser = argparse.ArgumentParser()
parser.add_argument('--username', dest='username')
parser.add_argument('--password', dest='password')
par = parser.parse_args()

pushed = 0
not_pushed = 0

wc_creds = {'username': par.username, 'password': par.password}
wc_headers = {'Content-Type': 'application/json'}
try:
    wc_request = requests.post(WC_TOKEN_URL, data=json.dumps(wc_creds), headers=wc_headers, timeout=60)
    print("tried logging into wc db and result was {}".format(wc_request.status_code))

    wc_token = wc_request.json()['access']
    offer_headers = {'Authorization': 'Bearer {}'.format(wc_token)}
    try:
        offer_export = requests.get('https://platform.whatscookin.us/home/?circle=bluesky-community', headers=offer_headers, timeout=60)
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
                
        payload = {"body": offer_string, "msgtype": "m.text"}
        headers = {"Authorization": "Bearer {}".format(MATRIX_ACCESS_TOKEN)}
        try:
            matrix_result = requests.post('https://matrix.blueskycommunity.net/_matrix/client/r0/rooms/!DoFTEmodLCUoSuEfNn:matrix.blueskycommunity.net/send/m.room.message', data=json.dumps(payload), headers=headers, timeout=15)
            if matrix_result.status_code == 200:
                        pushed += 1
            else:
                not_pushed += 1
            print(matrix_result.status_code)
        except Exception as e:
            print("couldn't push to matrix and error is {}".format(e))
                
    except:
        print("could not get offers. status code = {}".format(offer_export.status_code))
    
except:
    print("couldn't log into wc db. status code is {}".format(wc_request.status_code))

print("{} offers were pushed and {} were not pushed".format(pushed, not_pushed))

