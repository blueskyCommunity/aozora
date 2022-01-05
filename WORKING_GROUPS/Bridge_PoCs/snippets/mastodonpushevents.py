import requests

status_string = "an offer from whatscookin"

headers = {"Authorization": "Bearer OPLtF4AzaDdFS0FkbRv_IqmAdhVn6rtnIrFaXib4MCg"}
payload = {"status": status_string}
response = requests.post("https://mastodon.social/api/v1/statuses", data=payload, headers=headers)
print(response.status_code)
print(response.text)