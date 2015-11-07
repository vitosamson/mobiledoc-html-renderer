var webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: './dist',
    filename: 'index.js',
    library: 'MobiledocHtmlRenderer',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}
