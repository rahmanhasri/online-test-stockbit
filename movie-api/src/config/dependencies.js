const { omdb: omdbService } = require('../infrastructure/services');
const { logsDB } = require('../infrastructure/db/index');

module.exports = {
  omdbService,
  logsDB,
};
