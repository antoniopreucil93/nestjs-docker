# Docker swarm example for Nestjs

 - simple example of how to deploy nestjs application with postgres database inside docker container with help of docker swarm orchestration tool.

## Running the app

 - docker swarm init
 - docker stack deploy --compose-file docker-compose.yml ${service-name}
