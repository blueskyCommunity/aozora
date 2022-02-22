## Proof of Concept scripts doing simple bridges

Here we can put scripts for example to push our events to Mastodon and Matrix

## Using [exportandpusheventsmatrix.py](aozora/WORKING_GROUPS/Bridge_PoCs/exportandpusheventsmatrix.py) and [exportandpusheventsmastodon.py](aozora/WORKING_GROUPS/Bridge_PoCs/exportandpusheventsmastodon.py) scripts

Input your credentials to log in to [platform.whatscookin.us](#). The script will take care of exporting the public offers from the bluesky-community circle and push them to [bluesky matrix room](https://app.element.io/?pk_vid=d33b8aa8461c79051645255095d13fbf#/room/#matrix-bluesky:matrix.blueskycommunity.net) and [bluesky mastodon timeline](https://mastodon.blueskycommunity.net/web/timelines/public/local).

```
python3 matrixpushevents.py --username admin --password 123
python3 mastodonpushevents.py --username admin --password 123
```

**Note**: You have to escape special characters with backslash (\) that are in the password if there's any.

##### Pushing the offers(one by one) using curl commands

**For Matrix:**
We assume we have our offer ready to be pushed and we have to request a token from matrix - we can either click on our profile and go to **All Settings** > **Help & About** and in **"Advanced"** part, click on the **"Access Token"** and copy the dropped down token or just use curl - `curl -XPOST -d '{"type":"m.login.password", "user":"username", "password":"password"}' "https://matrix.blueskycommunity.net/_matrix/client/r0/login"` And it will return something like this `{"access_token":"MDAxO...blah","refresh_token":"MDAxO...blah","home_server":"matrix.blueskycommunity.net","user_id":"@myuserid:matrix.blueskycommunity.net"}`. Grab the access_token.
Then we need to get the room id for matrix. go to **Room Info** > **Room Settings** > **Advanced** and copy the **"Internal room ID"** which looks something like this `!DoR...blah:matrix.blueskycommunity.net`.
And we can post our offer into matrix now - `curl -XPOST -d '{"msgtype":"m.text", "body":"our properly formatted offer"}' "https://matrix.blueskycommunity.net/_matrix/client/r0/rooms/\!DoR...blah:matrix.blueskycommunity.net/send/m.room.message?access_token=MDAxO...blah"`

**For Mastodon:**
Click on your profile and go to **Edit profile** > **Development** and click **New Application**. Type in the **Application Name** you want and click **Submit** at the bottom. Then click on the application that has just been created and you'll see **Your access token**. Copy it.
Now for the curl part - `curl -XPOST 'https://mastodon.blueskycommunity.net/api/v1/statuses' -H 'Authorization: Bearer access_token' -F 'status=our properly formatted offer'`
