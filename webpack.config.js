const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

var plugins = [
  new ExtractTextPlugin({
    filename: 'style.css',
    disable: false
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: 'body'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new CopyWebpackPlugin([
    {
      from: APP_DIR + '/assets',
      to: BUILD_DIR + '/assets'
    }
  ])
]

var dev_plugin = [

]

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    APP_DIR + '/index.js'
  ],
  output: { path: BUILD_DIR, filename: 'bundle.js', publicPath: '/'},
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
      )
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader'
        }]
      })
    }, {
      test: /\.js$/,
      include: APP_DIR,
      loader: 'babel-loader'
    }, {
      test: /\.(jpg|png|eot|otf|svg|ttf|woff|woff2)$/,
      loader: 'url-loader'
    }]
  },
  plugins: plugins,
  target: 'web'
};
