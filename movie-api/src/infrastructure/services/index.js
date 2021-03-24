require('dotenv').config();
const axios = require('axios');

const buildOmdbService = require('./omdb');

const {
  OMDB_HOST = '',
  OMDB_KEY = '',
} = process.env;

const request = axios.create({
  baseURL: OMDB_HOST,
});

module.exports = {
  omdb: buildOmdbService(request, OMDB_KEY),
};
