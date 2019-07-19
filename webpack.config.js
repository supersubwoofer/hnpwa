const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.ts',
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),  
    new workboxPlugin.InjectManifest({
      swSrc: './src/scripts/worker.ts',
      swDest: 'sw.js'
    })
  ],
  output: {
    path: __dirname + '/build',
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader'
      },
      {
        test: /\.(ico|png|svg|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  }
}