const Movie = require('../entities/movie');

module.exports = ({ omdbService }) => {
  return (query) => {
    const { keyword, page = 1 } = query;
    return omdbService
      .search(keyword, page)
      .then(({ data, total }) => {
        return {
          data: (data || []).map((movie) => new Movie(movie)),
          total: total ? Number(total) : 0,
          page,
        };
      });
  };
};
