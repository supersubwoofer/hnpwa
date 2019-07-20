const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const resolve = require('path').resolve;

module.exports = {
  entry: './src/scripts/index.ts',
  output: {
    path: __dirname + resolve('/build'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),  
    new workboxPlugin.InjectManifest({
      swSrc: './src/scripts/worker.ts',
      swDest: 'worker.js',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/touch'
          }
        }]
      },
      {
        test: /\.(webmanifest)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: ''
          }
        }]
      },
      {
        test: /\.(css)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'style/'
          }
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'link:href']
          }
        }
      },
    ],
  },
}