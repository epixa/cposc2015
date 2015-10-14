'use strict';

const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: __dirname,
        loader: 'babel-loader'
      }
    ]
  }
};
