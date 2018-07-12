'use strict';

const MONGODB_URI = process.env.MONGODB_URI;

function getEvergreenConfig() {
  if (!MONGODB_URI) {
    return {};
  }

  const url = require('url');
  const querystring = require('querystring');
  const parsedUrl = url.parse(MONGODB_URI);
  const parsedQuery = querystring.parse(parsedUrl.query);

  return {
    url: MONGODB_URI,
    host: parsedUrl.hostname,
    port: parsedUrl.port ? Number.parseInt(parsedUrl.port, 10) : 27017,
    replicaSet: parsedQuery.replicaSet
  };
}

module.exports = {
  inOrchestration: !!MONGODB_URI,
  getEvergreenConfig
};
