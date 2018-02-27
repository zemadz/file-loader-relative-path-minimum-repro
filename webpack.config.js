const path = require('path');

const paths = {
  root: path.join(__dirname, ''),
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  context: paths.src,
  devtool: 'none',
  entry: {
    'js/index': './js/index.js'
  },
  module: {
    rules: [{
      test: /\.(png)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: paths.build,
          useRelativePath: true
        }
      }]
    }]
  },
  output: {
    filename: '[name].js',
    path: paths.build
  }
};
