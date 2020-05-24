var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Movie = require('../models/movie');

router.get('/api/v1/movies', function(req, res) {
  Movie.find(function(err, movies) {
    if (err) {
      return res.status(500).jsonp({
        status: 500,
        message: err.message
      });
    }
    res.status(200).jsonp(movies);
  });
});

router.get('/api/v1/movie/:id', function(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    if (err) {
      return res.status(500).jsonp({
        status: 500,
        message: err.message
      });
    }
    res.status(200).jsonp(movie);
  });
});

router.post('/api/v1/movie', function(req, res) {
  var m = new Movie({
    title: req.body.title,
    year: req.body.year,
    rated: req.body.rated,
    runtime: req.body.runtime,
    genre: req.body.genre,
    director: req.body.director
  });
  m.save(function(err, movie) {
    if (err) {
      return res.status(500).jsonp({
        status: 500,
        message: err.message
      });
    }
    res.status(200).jsonp(movie);
  });
});

router.put('/api/v1/movie/:id', function(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    movie.title = req.body.title;
    movie.year = req.body.year;
    movie.rated = req.body.rated;
    movie.runtime = req.body.runtime;
    movie.genre = req.body.genre;
    movie.director = req.body.director;
    movie.save(function(err) {
      if (err) {
        return res.status(500).jsonp({
          status: 500,
          message: err.message
        });
      }
      res.status(200).jsonp(movie);
    });
  });
});

router.delete('/api/v1/movie/:id', function(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    movie.remove(function(err) {
      if (err) {
        return res.status(500).jsonp({
          status: 500,
          message: err.message
        });
      }
      res.status(200).jsonp({
        status: 200,
        message: 'Movie deleted.'
      });
    });
  });
});

module.exports = router;