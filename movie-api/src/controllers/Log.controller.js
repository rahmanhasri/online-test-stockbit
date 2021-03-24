const buildLogger = require('../use-cases/logger');

module.exports = (dependencies) => {
  const { logsDB } = dependencies;
  const logger = buildLogger({ logsDB });

  const logRequest = (httpRequest) => {
    const { path, query } = httpRequest;
    return logger({ endpoint: path, query });
  };

  return {
    logRequest,
  };
};
