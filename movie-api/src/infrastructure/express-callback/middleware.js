module.exports = (controller) => {
  return async (req, res, next) => {
    const httpRequest = {
      query: req.query,
      params: req.params,
      path: req.path,
    };

    try {
      await controller(httpRequest);
      next();
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: 'Internal Server Error.' });
    }
  }
};
