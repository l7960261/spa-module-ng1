const config = require('./webpack.config.js');
const webpack = require('webpack');

config.devServer = {
  port: 9000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
};

module.exports = config;