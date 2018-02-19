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
            "jquery": path.resolve(__dirname, "node_modules/angular-patternfly/node_modules/patternfly/node_modules/jquery/dist/jquery.min.js"),
            "patternfly": "angular-patternfly/node_modules/patterfly",
        }
    },
}
