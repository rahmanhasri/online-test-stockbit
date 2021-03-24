const buildSearchMovie = require('../use-cases/search-movie');
const buildGetMovieDetail = require('../use-cases/get-movie-detail');

module.exports = (dependencies) => {
  const { omdbService } = dependencies;
  const searchMovie = buildSearchMovie({ omdbService });
  const getMovieDetail = buildGetMovieDetail({ omdbService });

  const getAllMovie = (httpRequest) => {
    const { query } = httpRequest;
    if (!query.keyword) {
      return {
        statusCode: 400,
        body: { message: 'query.keyword is required' },
      };
    }

    return searchMovie(query)
      .then((result) => {
        return {
          statusCode: 200,
          body: {
            ...result,
          },
        };
      });
  };

  const getMovieById = (httpRequest) => {
    const { query } = httpRequest;

    if (!query.id) {
      return {
        statusCode: 400,
        body: { message: 'query.id is required' },
      };
    }

    return getMovieDetail(query)
      .then((result) => {
        if (!result.title) {
          return {
            statusCode: 200,
            body: {
              data: null,
            },
          };
        }

        return {
          statusCode: 200,
          body: {
            data: result,
          },
        };
      });
  };

  return {
    getAllMovie,
    getMovieById,
  };
};
