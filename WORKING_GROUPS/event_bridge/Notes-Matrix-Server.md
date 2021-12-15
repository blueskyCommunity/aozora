Some quick notes on managing our matrix server at

https://matrix.blueskycommunity.net

(for ssh key please ask one of the moderators)

```
ssh -l ubuntu -i .ssh/matrix-bluesky.pem matrix.blueskycommunity.net

docker exec -it synapse bash

# to create a new user
register_new_matrix_user -u [USER_NAME] -p [PASSWORD] -c /data/homeserver.yaml http://localhost:8008/

```

To login to the server, get a matrix client and connect normally

Some folks have errors that the server is not found - please report in the channel
