#!/bin/sh

# 启动脚本 运行 Docker

echo "Git Pull"

git pull &&

echo "start docker"

docker build -t pkoa . &&

container=$(docker container ls -aqf "name=pkoa")

if [ -n "$container" ]; then
    echo "stop container and rm container"
    docker container stop $container &&
    docker container rm $container &&

    echo "start container"
    docker run --name pkoa -d -p 3021:3021 pkoa
else
    echo "start container"
    docker run --name pkoa -d -p 3021:3021 pkoa  
fi
