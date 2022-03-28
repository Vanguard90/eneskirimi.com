const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  mode: env,
  devtool: env === "development" ? "inline-source-map" : "",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins:
    env === "production"
      ? [
          require("autoprefixer"),
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
            template: "index.html",
            title: "Production",
          }),
          new CopyWebpackPlugin([
            { from: "./robots.txt", to: "" },
            { from: "./sitemap.xml", to: "" },
          ]), // Copy to build folder
        ]
      : [
          require("autoprefixer"),
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
            template: "index.html",
            title: "Production",
          }),
        ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
