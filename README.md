# Nidus

Nidus is a small experimental centralized home monitoring system that follow a
client/server architecture with multiple autonomous wireless devices
(micro-controllers).

> Nidus is an adverb of the Latin translation for `home`.

## Features

- Web GUI interface
- Dashboard
- Manage devices (Sentinel)
- Monitor:
  - Humidity
  - Temperature
  - Movement
  - Light
  - Gate
- Control:
  - Monitoring sensors
  - Lights
  - Video camera
- Alerts & Notifications

## Architecture

- [Nidus Web Application](https://github.com/alexandrelamberty/nidus-web-client/)
- [Nidus Server](https://github.com/alexandrelamberty/nidus-server/)
- [Sentinel](https://github.com/alexandrelamberty/sentinel/)

See the [Nidus API Specification]()

## Usage

Run the complete stack with Docker

## Environment variables

## Building

Use Docker compose to build the stack.

```bash
docker compose 
```

## Launching the app

Navigate to [http://nidus.lan](http://nidus.lan)