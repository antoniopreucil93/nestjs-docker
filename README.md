# Docker example for Nestjs

 - simple example of how to deploy nestjs application with postgres database inside docker container with help of docker compose.

## Running the app

 - docker-compose up -d .

## Testing
 1. docker inspect ${network-id} (show network details where you can find network ip addres)
 2. send request on route ${network-ip-address}:${api-container-exposed-port}/users (GET, POST)
 
