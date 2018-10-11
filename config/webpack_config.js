const webpack_config = {
    mode : 'development', //production development
    entry : {
        test : './src/js/test.js'
    },
    output : {
        filename : '[name].js'
    },
    module: {
        rules: [ // 在这里通过配置规则来使用loader
            { 
                test: /\.html$/, // 查找被当作模块引入到js中的后缀名是.html的文件
                use: 'string-loader' // 利用string-loader来处理它
            }
        ]
    }
    // module : {
    //     rules : [
    //         {
    //             test : /\.html$/,
    //             use : 'string-loader'
    //         }
    //     ]
    // }
  
}
module.exports = webpack_config;