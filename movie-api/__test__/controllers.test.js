const buildMovieController = require('../src/controllers/Movie.controller');
const { omdbService } = require('../src/config/dependencies');

describe('TEST Mock controllers/Movie.controller', () => {
  const MovieController = buildMovieController({ omdbService });
  describe('/Movie.controller.getAllMovie', () => {
    it("returns 200: mocked and original result", async function(done) {
      const addMock = jest.spyOn(omdbService, 'search');
      addMock.mockImplementation(() => Promise.resolve({
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
      }));

      const httpRequest = {
        query: {
          keyword: 'tenet',
        },
      };
      const resultMock = await MovieController.getAllMovie(httpRequest);
      expect(resultMock).toContainKey('statusCode');
      expect(resultMock.statusCode).toEqual(200);
      expect(resultMock).toContainKey('body');
      expect(omdbService.search).toHaveBeenCalledWith(httpRequest.query.keyword, 1);
      addMock.mockRestore();

      // original implementation
      const result = await MovieController.getAllMovie(httpRequest);
      expect(result).toContainKey('statusCode');
      expect(result.statusCode).toEqual(200);
      expect(result).toContainKey('body');
      done();
    });

    it("returns 400: mocked and original result no keyword", async function(done) {
      const addMock = jest.spyOn(omdbService, 'search');
      addMock.mockImplementation(() => Promise.resolve({
        data: [],
        total: 0,
      }));

      const httpRequest = {
        query: {
          keyword: '',
        },
      };
      const resultMock = await MovieController.getAllMovie(httpRequest);
      expect(resultMock).toContainKey('statusCode');
      expect(resultMock.statusCode).toEqual(400);
      expect(resultMock).toContainKey('body');
      expect(resultMock.body).toContainKey('message');
      expect(resultMock.body.message).toEqual('query.keyword is required');
      expect(omdbService.search).not.toHaveBeenCalled();
      addMock.mockRestore();

      // original implementation
      const result = await MovieController.getAllMovie(httpRequest);
      expect(result).toContainKey('statusCode');
      expect(result.statusCode).toEqual(400);
      expect(result).toContainKey('body');
      expect(result.body).toContainKey('message');
      expect(result.body.message).toEqual('query.keyword is required');
      done();
    });
  })

  describe('/Movie.controller.getMovieById', () => {

    it("returns 200: mocked and original result", async function(done) {
      const addMock = jest.spyOn(omdbService, 'getDetail');
      addMock.mockImplementation(() => Promise.resolve({
        Title: 'Tenet',
        Year: '2020',
        imdbID: 'tt6723592',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg',
      }));

      const httpRequest = {
        query: {
          id: 'tt6723592',
        },
      };
      const resultMock = await MovieController.getMovieById(httpRequest);
      expect(resultMock).toContainKey('statusCode');
      expect(resultMock.statusCode).toEqual(200);
      expect(resultMock).toContainKey('body');
      expect(resultMock.body).toContainKey('data');
      expect(resultMock.body.data).toBeObject();
      expect(omdbService.getDetail).toHaveBeenCalledWith(httpRequest.query.id);
      addMock.mockRestore();

      // original implementation
      const result = await MovieController.getMovieById(httpRequest);
      expect(result).toContainKey('statusCode');
      expect(result.statusCode).toEqual(200);
      expect(result).toContainKey('body');
      expect(result.body).toContainKey('data');
      expect(result.body.data).toBeObject();
      done();
    });

    it("returns 400: mocked and original result no keyword", async function(done) {
      const addMock = jest.spyOn(omdbService, 'getDetail');
      addMock.mockImplementation(() => Promise.resolve({}));

      const httpRequest = {
        query: {
          id: '',
        },
      };
      const resultMock = await MovieController.getMovieById(httpRequest);
      expect(resultMock).toContainKey('statusCode');
      expect(resultMock.statusCode).toEqual(400);
      expect(resultMock).toContainKey('body');
      expect(resultMock.body).toContainKey('message');
      expect(resultMock.body.message).toEqual('query.id is required');
      expect(omdbService.getDetail).not.toHaveBeenCalled();
      addMock.mockRestore();

      // original implementation
      const result = await MovieController.getMovieById(httpRequest);
      expect(result).toContainKey('statusCode');
      expect(result.statusCode).toEqual(400);
      expect(result).toContainKey('body');
      expect(result.body).toContainKey('message');
      expect(result.body.message).toEqual('query.id is required');
      done();
    });
  });
});