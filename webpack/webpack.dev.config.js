const webpack = require('webpack')
const path = require('path')

const parentDir = path.join(__dirname, '../')

module.exports = {
  entry: [
    path.join(parentDir, 'index.js')
  ],
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(scss|css)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      loaders: ['file-loader']
    },
    {
      enforce: 'pre',
      test: /\.(js|jsx)?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }
    ]
  },
  output: {
    path: parentDir + '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
}
