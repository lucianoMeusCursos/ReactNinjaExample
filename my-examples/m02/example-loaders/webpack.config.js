'use strict'

const { resolve, join } = require('path')

module.exports = {
  entry: resolve('index.js'),

  output: {
    path: join(__dirname, '..', 'example-loaders/dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.txt$/,
      use: 'file-loader?name=[path][name][hash:8].[ext]'
    }]
  }
}
