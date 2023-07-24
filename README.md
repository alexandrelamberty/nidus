# Nidus

Nidus is a small experimental home monitoring system.

## Features

- [x] Dashboard with widgets that show an overview of your monitoring data.
- [x] Manage micro-controller devices (Sentinel)
- [ ] Monitor:
  - [ ] Humidity
  - [x] Temperature
  - [x] Pressure
  - [ ] Light
  - [ ] Gate
  - [ ] Movement
  - [ ] Video
- [ ] Control:
  - [ ] Monitoring sensors
  - [ ] Relay
- [ ] Alerts & Notifications

## How to project is structured

- [Nidus](https://github.com/open-nidus/nidus) is the main project that contains all the others one as submodules. This project use Docker to create a stack with all the services needed. The fact that I have all the others project as submodules is remainder of when I had this project on my personal repositories. Now the submodules have no interest.

- [Nidus API Spec](https://github.com/open-nidus/nidus-api-spec) is the API specification used in the project. It is based on the OpenAPI specification and written in yaml.

- [Nidus API](https://github.com/open-nidus/nidus-api) sever application using Fiber and exposing an API through HTTP.

- [Nidus Web App](https://github.com/open-nidus/nidus-web-app) client application using React and consuming the API.

- [Sentinel OS](https://github.com/open-nidus/sentinel-os) system running on the micro-controllers, NodeMCU ESP8266 ESP-12F.

## Architecture / Infrastructure

The system follow a client/server architecture with multiple autonomous [ESP82666](https://components101.com/development-boards/nodemcu-esp8266-pinout-features-and-datasheet) wireless micro-controllers. It run as a [Docker](https://www.docker.com/) stack with [Portainer](https://www.portainer.io/) on a [Raspberry Pi4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/).

![Nidus architecture](nidus-architecture.png)
  
## Requirements

- [Docker](https://www.docker.com/)

## Usage

This application rely on some environment variables:

```properties
# database and mongo-express
DATABASE_ROOT_USER=root
DATABASE_ROOT_PASSWORD=root
DATABASE_NAME=nidus
DATABASE_USERNAME=nidus
DATABASE_PASSWORD=nidus
DATABASE_PORT=27017
# api
API_IMAGE_VERSION=dev
API_ENV=dev
API_PAIRING_KEY=9fca54477c8ad4e70dc5e1084f884aad
API_JWT_SECRET=d7a481461577ba4c3c4c6946cca7204b
API_JWT_EXPIRE=90
API_BCRYPT_HASH=7f91317e30a02bc7b87205e95b842df2
API_DATABASE_URI=mongodb://nidus:nidus@database:27017/nidus
# web
WEB_IMAGE_VERSION=dev
WEB_ENV=dev
WEB_APP_KEY=aaddddawrfffvvvvssaa
WEB_APP_API_URL=http://api.nidus.lan
# MQTT
MQTT_SERVER=localhost
MQTT_CLIENT_ID=nidus-messaging
MQTT_USERNAME=none
MQTT_PASSWORD=none
```

### Run with Docker

Create a file name `.env` and add the environment variables, then use Docker
compose to build and start the stack in detached mode.

```bash
docker compose --env-file .env up -d
```

### Run with Portainer

- Create the stack from this Git repository
- Add the environment variables

### Launching

The web app is accessible at <http://nidus.lan> and the API at
<http://api.nidus.lan>.
