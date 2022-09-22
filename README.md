# Nidus

Nidus is a small experimental centralized home monitoring system that follow a
client/server architecture with multiple autonomous wireless devices
(micro-controllers).

## Features

- [ ] Web GUI interface
- [ ] Dashboard
- [ ] Manage devices (Sentinel)
- [ ] Monitor:
  - [ ] Humidity
  - [ ] Temperature
  - [ ] Movement
  - [ ] Light
  - [ ] Gate
- [ ] Control:
  - [ ] Monitoring sensors
  - [ ] Lights
  - [ ] Video camera
- [ ] Alerts & Notifications

## Architecture


## Components

- [Nidus API Specification](https://github.com/alexandrelamberty/nidus-api-spec)
- [Nidus API](https://github.com/alexandrelamberty/nidus-api/)
- [Nidus Web Application](https://github.com/alexandrelamberty/nidus-web-app/)
- [Sentinel](https://github.com/alexandrelamberty/sentinel/)

## Requirements

- [Docker]()

## Usage

Run the complete stack with Docker

### Environment variables

Create a file name `.env ` and add the following

```properties
REACT_APP_ENV=test
REACT_APP_CLIENT_ID=jfjffffaddfeettgydgdffv
REACT_APP_KEY=aaddddawrfffvvvvssaa
REACT_APP_API_URL=http://localhost:8080999
WEB_APP_PORT=3000
API_URL=http://localhost:8080
API_PORT=3333
DATABASE_ROOT_USER=root
DATABASE_ROOT_PASSWORD=root
DATABASE_HOST=localhost
DATABASE_PORT=27017
DATABASE_NAME=nidus
DATABASE_USERNAME=nidus
DATABASE_PASSWORD=nidus
DATABASE_URI=mongodb://nidus:nidus@database:27017/nidus
CACHE_HOST=nidus-cache
CACHE_PORT=6379
CACHE_TTL=300
SESSION_HOST=nidus-session
SESSION_PORT=6380
SESSION_TTL=300
JWT_SECRET=123456
JWT_EXPIRE=123456
BCRYPT_HASH=1234
```

### Building

Use Docker compose to build and start the stack.

```bash
docker compose up --env-file .env up -d
```

### Launching the web app

Navigate to [http://nidus.lan](http://nidus.lan)

## References

- <https://www.mongodb.com/docs/manual/core/timeseries-collections/>