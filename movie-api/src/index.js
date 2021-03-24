const express = require('express');
require('dotenv').config();

const buildMovieController = require('./controllers/Movie.controller');
const buildLogController = require('./controllers/Log.controller');
const dependencies = require('./config/dependencies');
const {
  buildCallbackMiddleware,
  buildCallbackResponse,
} = require('./infrastructure/express-callback');

const MovieController = buildMovieController(dependencies);
const LogController = buildLogController(dependencies);

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(buildCallbackMiddleware(LogController.logRequest));
app.get('/search', buildCallbackResponse(MovieController.getAllMovie));
app.get('/detail', buildCallbackResponse(MovieController.getMovieById));

module.exports = app;
