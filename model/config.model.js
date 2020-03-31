const configs = require('../db/configs.json');

function getClientConfig(clientId) {
  return configs.find(config => config.clientId == clientId);
}

module.exports = {
  getClientConfig
}