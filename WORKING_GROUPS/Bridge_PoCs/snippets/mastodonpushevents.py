import requests
import os
from settings import *

ACCESS_TOKEN = os.getenv('ACCESS_TOKEN')
status_string = "an offer from whatscookin"

headers = {"Authorization": "Bearer {}".format(ACCESS_TOKEN)}
payload = {"status": status_string}
response = requests.post("https://mastodon.social/api/v1/statuses", data=payload, headers=headers)
print(response.status_code)
print(response.text)