const development = require('./development');
const test = require('./test');
const production = require('./production');

const env = { development, test, production };
module.exports = env[process.env.NODE_ENV];
