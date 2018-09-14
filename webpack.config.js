
var path = require('path');

// console.log(path.posix);

//extract-text-webpack-plugin 插件收集css静态文件合并到一个文件中
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');

var config = {
    entry:{
        main:'./src/index'
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        publicPath:'/dist/',
        filename:'main.js'
    },
    //设置环境
    mode:'development',
    //设置端口
    devServer:{
        port:8088,
    },
    //设置模块规则
    module:{
        rules:[
            {
                test:/\.css$/,

                /*
                //这种方式会带index.html文件中自动创建<style>标签来加载css
                use: [
                    'style-loader',
                    'css-loader'
                ],
                */

                // //用插件合成，最后<link>导入
                use: ExtractTextWebpackPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                }),
            },
            //配置vue-loader
            {
                test:/\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders:{
                        css:ExtractTextWebpackPlugin.extract({
                            use:'css-loader',
                            fallback:'vue-style-loader'
                        }),
                    }

                }
            },
            //配置es2015编译
            {
                test:/\.js$/,
                loader: "babel-loader",
                exclude:/node_modules/
            },
            /*
            当遇到♂f、 .png、.忧f等格式文件时， url-loader会把它们一起编译到 dist 目录下，
            “limit=1024” 是指如果这个文件小于 lkb，就以 base64 的形式加载，不会生成一个文件。
            * */
            //path.posix.join(assetsSubDirectory, _path)
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }

            },
        ]
    },
    //配置插件
    plugins:[
        // //重命名收集到的css合成文件,然后在index.html使用<link>标签导入
        new ExtractTextWebpackPlugin({
            filename:'main.css',
        }),
        new VueLoaderPlugin(),
    ]


};
module.exports = config;

