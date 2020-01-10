const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  config.resolve.alias['@components'] = path.join(__dirname, '../src/components');
  config.resolve.alias['@pure'] = path.join(__dirname, '../src/_shared/Pure');
  config.resolve.alias['@hoc'] = path.join(__dirname, '../src/_shared/HOC');
  config.resolve.alias['@utils'] = path.join(__dirname, '../src/utils');
  config.resolve.alias['@actions'] = path.join(__dirname, '../src/redux/actions');
  config.resolve.alias['@reducers'] = path.join(__dirname, '../src/redux/reducers');

  // Return the altered config
  return config;
};
