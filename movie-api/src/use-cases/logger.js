
module.exports = ({ logsDB }) => {
  return ({ endpoint, query } = {}) => {
    return logsDB.create({
      endpoint,
      params: JSON.stringify({
        query,
      }),
    });
  };
};
