## Docker Commands

#### List all docker images
```
  docker images
```
#### List all docker containers
```
  docker ps
```
#### Pull docker image 
```
  docker pull mongo[image-name]
```
#### Run docker container
```
  docker run -d -p localhost:container_port --name container_name image_name
```
#### Run commands inside running container
```
  docker exec -it container_id/container_name sh
```
#### Stop a running docker container
```
  docker kill container_id/container_name
```
#### Create a custom docker image
```
  docker build -t image-name path-of-project
  docker build -t node-app .
```
### Create docker volume to persists data across container restarts
```
  docker volume create volume_database
```
### Attach a vloume with container
```
  docker run -v volume_database:/data/db image_name
```
### Create a network to establish cummnication across containers
```
  docker network create custom_network
```
### Attach a network with container
```
  docker run --network custom_network --name container_name image_name
```