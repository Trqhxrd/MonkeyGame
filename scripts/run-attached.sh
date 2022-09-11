#!/bin/bash
docker build . -t trqhxrd/monkeygame:testing
docker container stop monkeygame
docker container rm monkeygame
docker run --rm --name monkeygame -p 8080:80 trqhxrd/monkeygame:testing