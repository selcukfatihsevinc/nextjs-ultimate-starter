/* eslint-disable no-param-reassign */
const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx'],
  webpack: config => {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['@pure'] = path.join(__dirname, 'src/_shared/Pure');
    config.resolve.alias['@hoc'] = path.join(__dirname, 'src/_shared/HOC');
    config.resolve.alias['@utils'] = path.join(__dirname, 'src/utils');
    config.resolve.alias['@actions'] = path.join(__dirname, 'src/redux/actions');
    config.resolve.alias['@reducers'] = path.join(__dirname, 'src/redux/reducers');

    return config;
  },
  exportTrailingSlash: true,
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/test': { page: '/test' },
    };
  },
});
