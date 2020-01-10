const LRUCache = require('lru-cache');
const log = require('debug')('starter:cache');
const config = require('./config');

const {
  cache: { isEnabled, maxMemory = 100 * 1000 * 1000, maxAge = 1000 * 60 * 60 } = {},
} = config;

const ssrCache = new LRUCache({
  length: (n, key) => n.toString().length + key.toString().length,
  max: maxMemory,
  maxAge,
});

async function renderAndCache({ app, req, res, page, query }) {
  if (!isEnabled) {
    return app.render(req, res, page, query);
  }

  const key = req.path;
  log('cache key: %s', key);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    return res.send(ssrCache.get(key));
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, page, query);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      return res.send(html);
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    return res.send(html);
  } catch (err) {
    return app.renderError(err, req, res, page, query);
  }
}

module.exports = {
  renderAndCache,
};
