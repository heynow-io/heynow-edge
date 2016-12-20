heynow-edge
=====

[![Build Status](https://travis-ci.org/heynow-io/heynow-edge.svg?branch=master)](https://travis-ci.org/heynow-io/heynow-edge)

## Requirements

- JDK8
- node + npm (optional, for easier frontend development)

## Building the code

In order to build the application, simply run:
```
./mvnw clean install
```
This will build both the frontend (using [webpack](https://github.com/webpack/webpack) via the [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)) and the backemd (spring-boot based zuul proxy).

## Running the code

To run the application simply execute the following command:
```
./mvnw spring-boot:run
```

## Frontend development

Since the frontend is built using webpack, it's possible to use [webpack-dev-server](https://github.com/webpack/webpack-dev-server) in order to have live reloading available and the backend accessible. Simply run `npm start` and the webpack-dev-server will start on port 9090 with a preconfigured proxy that will redirect all calls to the backend running on port 8080.
