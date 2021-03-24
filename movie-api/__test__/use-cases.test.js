const Movie = require('../src/entities/movie');
const buildGetMovieDetail = require('../src/use-cases/get-movie-detail');
const buildSearchMovie = require('../src/use-cases/search-movie');

describe('TEST Stub use-cases/get-movie-detail', () => {
  let omdbService = {
    getDetail: jest.fn((id) => Promise.resolve({
      Title: 'Silicon Valley',
      Year: '2014–2019',
      imdbID: id,
    })),
  };

  it('It should be return movie', async function(done) {
    const query = {
      id: 'tt2575988',
    };
    const getMovieDetail = buildGetMovieDetail({ omdbService });
    const result = await getMovieDetail(query);
    // expect(omdbService.getDetail).toHaveBeenCalledWith(query.id);
    expect(result.imdbID).toEqual(query.id);
    expect(result instanceof Movie).toEqual(true);
    done();
  });

});

describe('TEST Stub use-cases/search-movie', () => {
  let omdbService = {
    search: jest.fn(() => Promise.resolve({
      data: [
        {
          Title: 'Tenet',
          Year: '2020',
          imdbID: 'tt6723592',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg',
        },
        {
          Title: 'Tenet: 10 min Behind the Scenes',
          Year: '2020',
          imdbID: 'tt13061794',
          Type: 'movie',
          Poster: 'N/A'
        },
      ],
      total: 2,
    })),
  };

  it('It should be return movie', async function(done) {
    const query = {
      keyword: 'tenet',
    };
    const searchMovie = buildSearchMovie({ omdbService });
    const result = await searchMovie(query);
    // expect(omdbService.search).toHaveBeenCalledWith(query.keyword);
    expect(result.data).toBeArray();
    expect(result.data[0] instanceof Movie).toEqual(true);
    done();
  });

});