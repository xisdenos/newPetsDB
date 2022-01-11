docker run \
    --name postgres \
    -e POSTGRES_USER=lucaspinto \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=pets \
    -p 5555:5555 \
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash