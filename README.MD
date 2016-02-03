Install docker toolbox
https://www.docker.com/products/docker-toolbox

open a shell
cd temp
mkdir twitch
cd twitch
git clone $thisRepo

get api/oauth key from twitch

open docker quickstart shell

add oauth to c:\temp\twitch\$thisRepo\api\config.json
add username to c:\temp\twitch\$thisRepo\api\config.json
add channel to c:\temp\twitch\$thisRepo\api\config.json
cd c:\temp\twitch\$thisRepo\

docker build -i twitch .

docker run twitch