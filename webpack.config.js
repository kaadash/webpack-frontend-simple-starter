var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: [
    'bootstrap-loader',
    './src/scripts/entry.js'
  ],
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
      {
        test: path.join(__dirname, 'src/scripts'),
        exclude: 'node_modules',
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};