const path = require('path');
const webpack = require('webpack');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      ...getConfig().plugins,
      new webpack.ProvidePlugin({
        process: path.resolve(__dirname, './node_modules/process/browser'),
      }),
    ],
    resolve: {
      fallback: {
        ...getConfig().resolve.fallback,
        os: false,
      },
      alias: {
        ...getConfig().resolve.alias,
        react: path.resolve(__dirname, './node_modules/react/'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        'styled-system': path.resolve(__dirname, './node_modules/styled-system'),
        'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
        'react-native': path.resolve(__dirname, './src/mock.js'),
        'react-native-web': path.resolve(__dirname, './node_modules/react-native-web'),
        'simple-masonry-layout': path.resolve(__dirname, './node_modules/simple-masonry-layout/'),
        'react-primitives': path.resolve(__dirname, './node_modules/react-primitives/'),
        'react-primitives-svg': path.resolve(__dirname, './node_modules/react-primitives-svg'),
      },
      extensions: getConfig().resolve.extensions.concat('.web.js'),
    },
  });
};
