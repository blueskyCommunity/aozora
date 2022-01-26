#https://matrix-org.github.io/synapse/latest/admin_api/register_api.html
import hmac
import hashlib
import requests
import json
import os

REGISTRATION_SHARED_SECRET = os.environ.get('REGISTRATION_SHARED_SECRET')
USERNAME = os.environ.get('USERNAME')
PASSWORD = os.environ.get('PASSWORD')

nonce_request = requests.get("https://matrix.blueskycommunity.net/_synapse/admin/v1/register")
nonce = nonce_request.json()["nonce"]

def generate_mac(nonce, user, password, admin=False, user_type=None):

    mac = hmac.new(
      key=b"{}".format(REGISTRATION_SHARED_SECRET),
      digestmod=hashlib.sha1,
    )

    mac.update(nonce.encode('utf8'))
    mac.update(b"\x00")
    mac.update(user.encode('utf8'))
    mac.update(b"\x00")
    mac.update(password.encode('utf8'))
    mac.update(b"\x00")
    mac.update(b"admin" if admin else b"notadmin")
    if user_type:
        mac.update(b"\x00")
        mac.update(user_type.encode('utf8'))

    return mac.hexdigest()

my_mac = generate_mac(nonce, "tuna", "Naruto7", True)

headers = {"Content-Type": "application/json"}
data = {"nonce": nonce, "username": USERNAME, "password": PASSWORD, "admin": "true", "mac": my_mac}
register = requests.post("https://matrix.blueskycommunity.net/_synapse/admin/v1/register", headers=headers, data=json.dumps(data))
print(register.status_code, register.text)

