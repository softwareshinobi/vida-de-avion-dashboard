#!/bin/bash

set -e

set -x

docker-compose down --remove-orphans

docker-compose up -d
