// on the order of loaders in webpack https://stackoverflow.com/questions/32234329/what-is-the-loader-order-for-webpack
// relevant for postcss-loader, is *must* come above the sass-loader to do anything

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const path = require('path');


module.exports = {
  context: path.join(__dirname, '/src/js'),
  entry: {
    index: './pages/index.js',
    int: './pages/int.js',
    yourdata: './pages/yourdata.js',
    vendor: ['chart.js'],
  },
  output: {
    path: path.join(__dirname, './static/'),
    filename: 'js/bundle-[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
          fallback: 'style-loader',
        }),
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: { presets: ['es2015'] } },
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new WebpackCleanupPlugin(),
    new ExtractTextPlugin({ filename: './css/bundle.css', disable: false, allChunks: true }),
    new CopyWebpackPlugin([{ from: '../assets', to: './assets' }, { from: '../*.html', to: './static' }]),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'js/vendor.bundle.js' }),
  ],
};
