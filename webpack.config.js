const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => ({
  entry: {
    main: path.join(__dirname, './src/client.js'),
    'main-ssr': path.join(__dirname, './src/client.js'),
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].bundle.js',
  },

  // specify build mode
  mode: env.production ? 'production' : 'development',

  // Determine how the different types of modules within a project will be treated
  module: {
    rules: [
      // First, run the linter.
      env.development
        ? {
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, './src'),
            enforce: 'pre', // !important
            use: [
              {
                loader: 'eslint-loader',
              },
            ],
          }
        : null,
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        exclude: [path.join(__dirname, './node_modules')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
            },
          },
        ],
      },
    ].filter(Boolean),
  },

  // Customize webpack build process with plugins.
  plugins: [
    // Remove previous contents from build folder
    new CleanWebpackPlugin(['build'], {
      root: process.cwd(),
      verbose: true,
      dry: false,
    }),
    // This helps ensure the builds are consistent if source hasn't changed:
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],

  // only display info when errors or new compilation happen
  stats: 'minimal',
});
