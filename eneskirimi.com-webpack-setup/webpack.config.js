const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
    module: {
      rules: [{
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
      },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
          ]
        },
       {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: './dist'
  },
  plugins: [
  	new CleanWebpackPlugin(['dist/*']),
  	new HtmlWebpackPlugin({
  		template: 'index.html'
  	})
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
