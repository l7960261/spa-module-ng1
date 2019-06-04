const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    singleSpa: path.join(__dirname, 'src', 'index.single-spa.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    libraryTarget: 'umd',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.join(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
};