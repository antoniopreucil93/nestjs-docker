# Docker swarm example for Nestjs

 - simple example of how to deploy nestjs application with postgres database inside docker container with help of docker swarm orchestration tool.

## Running the app

 - docker swarm init (optionaly you can specify ip address)
 - docker stack deploy --compose-file docker-compose.yml ${service-name}

## Testing
 1. docker network ls (list all networks and find network with driver swarm)
 2. docker inspect ${network-id} (show network details where you can find network ip addres)
 3. send request on route ${network-ip-address}:${api-container-exposed-port}/users
 
