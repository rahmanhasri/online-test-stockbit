const request = require('supertest');
const app = require('../src/index');

describe('TEST API /search', () => {
  it('It should be return 200: success', function(done) {
    request(app)
      .get('/search?keyword=silicon valley')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toBeArray();
        done();
      });
  });

  it('It should be return 400: query.keyword is required', function(done) {
    request(app)
      .get('/search?keyword=')
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('query.keyword is required');
        done();
      });
  });

  it('It should be return 200: success (empty array)', function(done) {
    request(app)
      .get('/search?keyword=somethingwrongwithkeyword')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toBeArray();
        expect(response.body.data).toBeEmpty();
        expect(response.body.total).toEqual(0);
        done();
      });
  });

});

describe('TEST API /detail', () => {
  it('It should be return 200: success', function(done) {
    request(app)
    .get('/detail?id=tt2575988')
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContainKey('data');
      expect(response.body.data).toContainKey('title');
      expect(response.body.data.title).toBeString();
      done();
    });
  });

  it('It should be return 400: query.id is required', function(done) {
    request(app)
    .get('/detail?id=')
    .then(response => {
      expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('query.id is required');
      done();
    });
  });

  it('It should be return 200: data == null', function(done) {
    request(app)
    .get('/detail?id=wrong')
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContainKey('data');
      expect(response.body.data).toBeNull();
      done();
    });
  });
});