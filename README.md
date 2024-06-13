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

