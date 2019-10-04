const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';
const isDevelopment = environment === 'development';

const config = {
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  mode: environment,

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|bmp)$/,
        exclude: /\.(js|html|css|scss|jsx|json)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.module\.(css|scss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]_[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new LodashModuleReplacementPlugin(),
  ],
};

if (isDevelopment) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  config.devtool = 'source-map';

  config.devServer = {
    historyApiFallback: true,
    hot: true,
    open: true,
    stats: 'minimal',
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
      },
    },
  };
}

module.exports = config;
