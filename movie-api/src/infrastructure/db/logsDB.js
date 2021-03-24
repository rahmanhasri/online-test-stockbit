module.exports = (connection) => {
  const create = ({
    endpoint,
    params,
  }) => {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO logs
        (endpoint, params, datetime)
        VALUES ('${endpoint}', '${params}', NOW())
      `;

      connection.query(query, (error, result) => {
        if (error) {
          return reject(error)
        }

        return resolve(result);
      });

    });
  };

  return {
    create,
  };
};
