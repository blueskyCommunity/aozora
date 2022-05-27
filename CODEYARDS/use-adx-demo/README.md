Goal: build on top of ADX
So if we want to build on ADX, we need first to be able to use it as a dependency in a project.

We are trying first to use it by assuming that ../adx is installed locally

Next we will try to use it as a proper npm package

To try to do this, install this repo locally and install https://github.com/bluesky-social/adx in the relative path ../adx

Then in this repo, run

npm install

cd src

node index.js

