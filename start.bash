set -e

set -x

docker-compose pull

docker-compose build

docker-compose down --remove-orphans

docker-compose up -d
