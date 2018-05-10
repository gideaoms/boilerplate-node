const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve('app', 'assets', 'javascripts', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'javascripts/bundle.js',
  },
  plugins: [
    new NodemonPlugin({
      script: 'server.js',
      ext: 'js,njk',
    }),
    new ExtractTextPlugin('stylesheets/bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  devtool: 'source-map',
};
