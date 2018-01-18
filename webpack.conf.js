const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const GoogleFontsPlugin = require('google-fonts-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
				{ family: 'Julius Sans One' },
        { family: 'Zilla Slab Highlight' },
        { family: 'Barlow Condensed' }
			]
		}),
    new ExtractTextPlugin('dist.css')
  ],
  externals : {
    document: 'document'
  }
}
