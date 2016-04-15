var webpack = require("webpack");

var path = require("path");
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        index: './index', //我们开发时的入口文件
        ensure: ['./ensure']
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        publicPath:"./dist/", //给require.ensure用
        chunkFilename: "[name].[hash].js"//给require.ensure用
    }, //页面引用的文件

    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    // plugins: [commonsPlugin],
    resolve: {
        extensions: ['.js', "", ".css"],
        alias: {
            jquery: path.join(__dirname, 'jquery.js')
        }
    }
}
