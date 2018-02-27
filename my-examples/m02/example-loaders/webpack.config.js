'use strict'

const { resolve, join } = require('path')

module.exports = {
  entry: resolve('index.js'),

  output: {
    path: join(__dirname, '..', 'example-loaders/dist'),
    filename: 'bundle.js'
  },

  // usando file-loader
  // module: {
  //   rules: [{
  //     test: /\.txt$/,
  //     // use: 'file-loader?name=[path][name][hash:8].[ext]'
  //   }]
  // }

  // usando url-loader
//   module: {
//     rules: [{
//       test: /\.txt$/,
//       use: {
//         loader: 'url-loader',
//         query: {
//           limit: 100
//         }
//       }
//     }]
//   }
// }

// usando raw-loader
  module: {
    rules: [{
      test: /\.txt$/,
      use: 'raw-loader'
    }]
  }
}
