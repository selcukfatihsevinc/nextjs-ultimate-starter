const routes = require('next-routes');

module.exports = routes()
  .add('index', '/')
  .add({ name: 'counter', pattern: '/counter', page: 'counter' });
