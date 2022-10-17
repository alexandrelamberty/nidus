# Nidus

Nidus is a small experimental centralized home monitoring system that follow a
client/server architecture with multiple autonomous wireless micro-controllers. 

## Features

- [x] Web GUI interface
  - [x] Dashboard
  - [x] Manage devices (Sentinel)
- [ ] Monitor:
  - [ ] Humidity
  - [x] Temperature
  - [x] Pressure
  - [ ] Movement
  - [ ] Light
  - [ ] Gate
- [ ] Control:
  - [ ] Monitoring sensors
  - [ ] Lights
  - [ ] Video camera
- [ ] Alerts & Notifications
- [ ] Security
  - [ ] HTTPS
- [ ] Dabase backup
- [ ] Kubernetes

## Architecture

The application run as a Docker stack with Portainer on a Raspberry Pi 4,
running a custom Raspios Lite image and managed with Ansible. See: `docker-compose.yaml`

![Nidus architecture](nidus-architecture.png)

## Components

### Application

- Nidus API Specification
 
  Web API specification with `OpenAPI`

  <https://github.com/alexandrelamberty/nidus-api-spec>

- Nidus API
  
  API implementation in `Go` with `Fiber`

  <https://github.com/alexandrelamberty/nidus-api/>

- Nidus Web App
  
  Web application in `React`

  <https://github.com/alexandrelamberty/nidus-web-app/>


### Micro-controller 
  
  NodeMCU Lua Amica Module V2 ESP8266 ESP-12FCP2102, BMP180 and DS18B20.

  ![Nidus architecture](micro-controller-sensor.jpg)

- Sentinel API Specification
  
  Micro-controller API specification with OpenAPI

  <https://github.com/alexandrelamberty/sentinel-api-spec/>

- Sentinel ESP8266

  Micro-controller software in `C` with `Arduino`
  
  <https://github.com/alexandrelamberty/sentinel-esp8266/>


### Server

Raspberry Pi 4 Modèle B 4 Go ARM-Cortex-A72

![Nidus architecture](raspberry-pi-4.jpg)

- Xraspios

  `Raspios Lite Armh` custom image made with `Packer` 
  
  <https://github.com/alexandrelamberty/xraspios/>


- Xraspios IaC

  Server management with `Ansible`

  <https://github.com/alexandrelamberty/xraspios-iac/>

## Requirements

- [Ansible](https://www.docker.com/)
- [Docker](https://www.docker.com/)
- [Portainer](https://www.portainer.io/)

## Usage

This application rely on some environment variables;

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

Create a file name `.env ` and add the environment variables, then use Docker
compose to build and start the stack.

```bash
docker compose up --env-file .env up -d
```

### Run with Portainer

- Create the stack from this Git repository
- Add the environment variables

### Launching

The web app is accessible at <http://nidus.lan> and the API at
<http://api.nidus.lan>.

