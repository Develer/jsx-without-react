var path = require('path');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'main.bundler.js'
  },
  mode:'development',
  module: {
    rules: [{
      test: /\.js$/, // include .js files
      exclude: /node_modules/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }]
    }]
  },
};