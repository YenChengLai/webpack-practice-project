var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
  'faker', 'lodash', 'redux', 'react-redux',
  'react-dom', 'react-input-range', 'redux-form',
  'redux-thunk', 'react-router', 'react'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js' // [name] will be replaced by entry's key
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],  // the order is important, dealed from right to left
        test: /\.css$/
      }
    ]
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor'
  //   })
  // ]
};
