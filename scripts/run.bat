REM This script creates a docker container and runs the app in it.
docker build . -t trqhxrd/monkeygame:testing
docker container stop monkeygame
docker run -d --rm --name monkeygame -p 8080:80 trqhxrd/monkeygame:testing