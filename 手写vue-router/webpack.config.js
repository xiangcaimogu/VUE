const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'build.js',
        path: resolve('./build')
    },
    module: {
        //webpack使用loader的方式处理各种各样的资源
        rules: [{
            test: /\.js$/, //处理以.js结尾的文件
            exclude: /node_modules/, //处理除了nodde_modules里的js文件
            use: 'babel-loader' //用babel-loader处理
        }]
    },
    mode: 'development',
    plugins: [
        // plugins的配置
        new HtmlWebpackPlugin({
          template: './index.html'
        })
      ],
    // devServer: {
    //     contentBase: resolve(__dirname, './build'),
    //     compress: true,
    //     port: 3000,
    //     open: true
    // }
}