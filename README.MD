Install docker toolbox [Docker Toolbox](https://www.docker.com/products/docker-toolbox)

cd temp

mkdir twitch

cd twitch

git clone https://github.com/tkntobfrk/dockerTwitchChat.git

get api/oauth key from [twitch] (https://twitchapps.com/tmi/)

open docker quickstart terminal

add oauth to c:\temp\twitch\dockerTwitchChat\api\config.json

add username to c:\temp\twitch\dockerTwitchChat\api\config.json

add channel to c:\temp\twitch\dockerTwitchChat\api\config.json

cd c:\temp\twitch\dockerTwitchChat\

docker build -i twitch .

docker run twitch