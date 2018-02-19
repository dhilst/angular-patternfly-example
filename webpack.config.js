var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: { contentBase: '.', },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.jquery": "jquery",
        })
    ],
    resolve: {
        alias: {
            "jquery": "patternfly/node_modules/jquery",
            "angular": "angular-patternfly/node_modules/angular",
        }
    },
}
