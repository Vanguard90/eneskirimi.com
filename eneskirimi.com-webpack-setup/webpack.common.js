const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
    module: {
      rules: [
        {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
          attrs: ['img:src']
        }
      }
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
    ]},
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    require('autoprefixer'),
    new CleanWebpackPlugin(['dist/*']),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Production'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};