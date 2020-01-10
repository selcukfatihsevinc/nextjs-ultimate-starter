const next = require('next');
const express = require('express');
const compression = require('compression');
const git = require('git-rev-sync');
const log = require('debug')('starter:index');
const routes = require('./routes');
const { renderAndCache } = require('./cache');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV || 'development';
const dev = env === 'development';
const app = next({ dev });
const { error } = console;

const handle = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  const { page } = route;
  req.env = env;
  req.version = Math.random();

  try {
    req.version = git.short();
  } catch (e) {} // eslint-disable-line

  renderAndCache({ app, req, res, page, query });
});

app
  .prepare()
  .then(() => {
    const server = express();
    server.set('trust proxy', 1);
    server.disable('x-powered-by');
    server.use(compression());
    server.use(handle);
    server.listen(PORT, err => {
      if (err) throw err;
      log('server listening, port: %s', PORT);
    });
  })
  .catch(e => {
    error(e.stack);
    process.exit(1);
  });
