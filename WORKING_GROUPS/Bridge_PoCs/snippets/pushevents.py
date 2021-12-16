from json2html import *
import requests
import json

#event from whatscookin
event_json = [{"title":"TestOfferForPushingEvent","desc":"","is_free":True,"meeting_link":""},{"title":"testevent2","desc":"testing event2","is_free":True,"meeting_link":"https://jitsi.modular.im/testmeetingfortestevent"},{"title":"test3's wish(7)","desc":"testing","is_free":True,"meeting_link":"https://jitsi.modular.im/testmeetingfortestevent"},{"title":"testoffer1","desc":"tesing offer","is_free":True,"meeting_link":"https://www.google.com"}]

event_html_string = json2html.convert(json = event_json[1], clubbing=False, escape=True)

#CURL part
url = "https://matrix.org/_matrix/client/r0/rooms/!pGknCOjcLlodAZYwdl:matrix.org/send/m.room.message"
payload = {"body": "","format": "org.matrix.custom.html","formatted_body": '' +event_html_string+ '',"msgtype": "m.text"}
headers = {"Authorization": "Bearer syt_dHVuYTc4_igTRRcUtwTVDeaeFJNxk_26pf9i"}
res = requests.post(url, data=json.dumps(payload), headers=headers)
print(res.text)
print(res.status_code)