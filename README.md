# Nidus

Nidus is a small experimental centralized home monitoring system that follow a
client/server architecture with multiple autonomous wireless devices
(micro-controllers). 

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

## Architecture

The application run on a Raspberry Pi 4 and is completly containerized with Docker.

## Components

- OpenAPI specification 

  <https://github.com/alexandrelamberty/nidus-api-spec>

- API implementation in GO with Fiber

  <https://github.com/alexandrelamberty/nidus-api/>

- Web application in React

  (https://github.com/alexandrelamberty/nidus-web-app/)

- Micro-controller software in C with Arduino

  <https://github.com/alexandrelamberty/sentinel/>

- Custom Debian Lite image for the Raspberry Pi server

  <https://github.com/alexandrelamberty/sentinel/>

- Raspberry Pi management with Ansible

  <https://github.com/alexandrelamberty/sentinel/>


## Requirements

- [Docker](https://www.docker.com/)

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
REACT_APP_ENV=dev
REACT_APP_CLIENT_ID=jfjffffaddfeettgydgdffv
REACT_APP_KEY=aaddddawrfffvvvvssaa
REACT_APP_API_URL=http://localhost:3333
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
<http://api.nidus.lan>

## References

- <https://www.mongodb.com/docs/manual/core/timeseries-collections/>