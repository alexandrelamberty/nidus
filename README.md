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

## Architecture / Infrastructure

The system follow a client/server architecture with multiple autonomous [ESP82666](https://components101.com/development-boards/nodemcu-esp8266-pinout-features-and-datasheet)
wireless micro-controllers. It run as a [Docker](https://www.docker.com/) stack with
[Portainer](https://www.portainer.io/) on a
[Raspberry Pi4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/).

![Nidus architecture](nidus-architecture.png)

## API Specifications

- Nidus API Specification

  Web API specification following the [OpenAPI](https://www.openapis.org/) standard.

  <https://github.com/alexandrelamberty/nidus-api-spec>

- Sentinel API Specification
  
  Micro-controller API specification with `OpenAP`

  <https://github.com/alexandrelamberty/sentinel-api-spec/>

## Components

### Application

- Nidus API
  
  API implementation in [Go](https://go.dev/) with [Fiber](https://gofiber.io/)

  <https://github.com/alexandrelamberty/nidus-api/>

- Nidus Web App
  
  Web application in [Typescript](https://www.typescriptlang.org/) with [React](https://reactjs.org/)

  <https://github.com/alexandrelamberty/nidus-web-app/>

### Micro-controller
  
  NodeMCU Lua Amica Module V2 ESP8266 ESP-12FCP2102, BMP180 and DS18B20.

  ![Nidus architecture](micro-controller-sensor.jpg)

- Sentinel ESP8266

  Micro-controller software in `C` with `Arduino`
  
  <https://github.com/alexandrelamberty/sentinel-esp8266/>

### Server

Raspberry Pi 4 Modèle B 4 Go ARM-Cortex-A72

![Raspberry Pi 4 Modèle B 4 Go ARM-Cortex-A72](raspberry-pi-4.jpg)

- Xraspios

  `Raspios Lite Armh` custom image made with `Packer`
  
  <https://github.com/alexandrelamberty/xraspios/>

- Xraspios IaC

  Server management with `Ansible`

  <https://github.com/alexandrelamberty/xraspios-iac/>

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
