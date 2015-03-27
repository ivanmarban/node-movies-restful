# Simple RESTful API Using Node, Express 4 and MongoDB
A simple RESTful API server which supports basic CRUD operations.

## Prerequisites
- node.js
- npm package manager
- cURL
- git
- MongoDB

## Installation
Clone this repository and install node modules
```sh
$ git clone git@github.com:ivanmarban/node-movies-restful.git
$ cd node-movies-restful
$ npm install
```
Modify config/config.js for your environment and start server
```sh
$ node server.js
```
##Testing the API using cURL
Get all movies:
```sh
$ curl -i -X GET http://localhost:3000/api/v1/movies 
```
Get movie with _id value of 5514677bda31962c1189aa23
```sh
$ curl -i -X GET http://localhost:3000/api/v1/movie/5514677bda31962c1189aa23
```
Delete movie with _id value of 5514677bda31962c1189aa23
```sh
$ curl -i -X DELETE http://localhost:3000/api/v1/movie/5514677bda31962c1189aa23
```
Add new movie
```sh
$ curl -i -X POST -H 'Content-Type: application/json' -d '{"title": "2001: A Space Odyssey","year": "1968","rated": "G","runtime": "160 min","genre": "Mystery, Sci-Fi","director": "Stanley Kubrick"}' http://localhost:3000/api/v1/movie
```
Modify movie with _id value of 5514677bda31962c1189aa23
```sh
$ curl -i -X PUT -H 'Content-Type: application/json' -d '{"title": "2001: A Space Odyssey","year": "1968","rated": "G","runtime": "160 min","genre": "Sci-Fi","director": "Stanley Kubrick"}' http://localhost:3000/api/v1/movie
```

##REST API
URL  | HTTP Verb | POST Body | Result 
------------- | ------------- | ------------- | -------------
/api/v1/movies  | GET  | empty  | Return all movies
/api/v1/movie  | POST   | JSON string  | New movie created
/api/v1/movie/:id  | GET   | empty  | Return single movie
/api/v1/movie/:id  | PUT   | JSON string  | Updates an existing movie
/api/v1/movie/:id  | DELETE   | empty  | Deletes existing keyword
