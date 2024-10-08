const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpackplugin');

module.exports = {
    mode: 'production' , 
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'General-Info',
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html',
        });
        new HtmlWebpackPlugin({
            title: 'Hobby',
            template: path.resolve(_dirname, './src/pages/about.html'),
            filename: 'about.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(_dirname, 'dist'),
        },
        compress: true,
        port:8080
    },
};