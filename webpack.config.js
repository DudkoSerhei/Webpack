const path = require('path');

module.exports = {
  entry: './src/index.js',
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
     },
     {
       test: /\.css$/,
       loader: 'css-loader'
     },
     {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
   ]
 }
};
