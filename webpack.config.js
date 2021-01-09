var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  // mode: 'production',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        include : SRC_DIR,
        test : /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader : 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  }
};