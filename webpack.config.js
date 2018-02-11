const path = require('path')

const GoogleFontsPlugin = require('google-fonts-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: 'dist/',
    filename: 'app.js'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '/src')
    }
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
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.s[a|c]ss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      { test: /\.html$/, loader: 'raw-loader'},
      { test: /\.(png|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url-loader' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new GoogleFontsPlugin({
			fonts: [
				{ family: 'Yanone Kaffeesatz' },
        { family: 'Anton' }
			]
		}),
    new ExtractTextPlugin('app.css')
  ],
  externals : {
    document: 'document'
  }
}
