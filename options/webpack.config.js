const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
       path: path.join(__dirname, '/'),
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 8080
    },
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}