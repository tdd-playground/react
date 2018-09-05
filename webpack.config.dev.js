const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const modules = require('./webpack.modules');

const webpackConfig = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/Index.jsx',
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    noInfo: false,
    hot: false,
    inline: true,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: '8888',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

webpackConfig.module = modules.module;

module.exports = webpackConfig;
