const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: resolve('./dist'),
    publicPath: 'dist/',
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['react', 'env'],
            plugins: ['add-module-exports']
          }
        }
      }
    ]
  },
  externals : {
    document: 'document'
  }
}
