const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = merge(common, {
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass,
        new CopyWebpackPlugin([{ from: './robots.txt', to: '' }, { from: './sitemap.xml', to: '' }]) // Copy to build folder
    ]
});
