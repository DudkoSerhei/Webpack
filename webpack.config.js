const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
   loaders: [
     {
       test: /.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/
     }
   ]
 }
};
