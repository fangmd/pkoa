#!/bin/sh

docker-compose -f docker-compose.test.yml down &&
docker-compose -f docker-compose.test.yml rm &&
docker-compose -f docker-compose.test.yml build &&
docker-compose -f docker-compose.test.yml up -d
sleep 1
docker rmi $(docker images -f "dangling=true" -q)
echo y | docker volume prune
printf "\n... HAPPY CODING ...\n\e[0m"
