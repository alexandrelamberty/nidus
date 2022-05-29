# Nidus

Nidus is a small experimental home monitoring project to explore the world of
micro-controllers.

The solutions consist of multiple autonomous wireless embedded devices with
sensors. A server that that expose an API, store and cache data. And a web
client to interact with the API.

> Nidus is an adverb of the Latin translation for `home`.

## Features

- Web GUI interface to manage devices (Sentinel)

## Technologies

- Golang
- Mango
- Docker
- Arduino

## Hardware

- Microcontroller NodeMCU Amica V2 esp8266 esp-012F CP2120

## Software architecture

### Client

NGINX Web server with a React application

See [Nidus Client](https://github.com/alexandrelamberty/nidus/client/)

> Use Curl  

### Server

The server application consist of 4 containerized services running on a
dedicated micro-computer.

See [Nidus Server](https://github.com/alexandrelamberty/nidus/server/)

- Web server - NGINX
- API - Golang & Fiber
- Database - Mongo
- Cache - Redis

### Embedded systems

They are based on `Sentinel` and they run a web server that expose an API to
interact with them.

See [Sentinel](https://github.com/alexandrelamberty/sentinel/)

## References

> TO IMPLEMENT
