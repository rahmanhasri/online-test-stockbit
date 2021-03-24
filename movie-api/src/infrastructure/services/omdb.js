module.exports = (request = {}, apiKey) => {
  const search = (keyword, page = 1) => {
    return request.get(`/?apikey=${apiKey}&s=${keyword}&page=${page}`)
      .then((response) => {
        return {
          data: response.data.Search,
          total: response.data.totalResults,
        };
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const getDetail = (id) => {
    return request
      .get(`/?apikey=${apiKey}&i=${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  return {
    search,
    getDetail,
  };
}