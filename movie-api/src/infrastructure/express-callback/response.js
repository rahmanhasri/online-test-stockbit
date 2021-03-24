module.exports = (controller) => {
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
    };

    try {
      const httpResponse = await controller(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: 'Internal Server Error.' });
    }
  }
};