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

NGINX Web server

> Use Curl  

### Server

The server application consist of 4 containerized services running on a
dedicated micro-computer.

- Web server - NGINX
- API - Golang & Fiber
  It uses Golang for the server language with the Fiber framework.
- Database - Mongo
  The storage is made through a Mongo database.
- Cache - Redis
  The caching of data is done with Redis

### Embedded systems

They run a web server that expose an API to interact with them.
See `Sentinel System Documentation` 

## References
