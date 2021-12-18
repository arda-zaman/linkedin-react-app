const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main_bundle.[contenthash].js',
        publicPath: '/'
    },
    devServer: {
        port: 8000,
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
}