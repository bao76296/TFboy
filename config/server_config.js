
const proxy = require('http-proxy-middleware');

const server_config = {
    host: 'localhost',
    port: 8080,
    livereload: true, // 热更新
    // directoryListing: true, // 开启目录
    // open: true, // 开启 启动浏览器
    middleware : [
        proxy('/test',{
            target : 'https://h5.ele.me/', //https://www.smartisan.com/product/home
            changeOrigin : true,
            pathRewrite : {
                '^/test' : ''
            }
        }),
        proxy('/api',{
            target : 'https://h5.ele.me/',
            changeOrigin: true,
            pathRewrite : {
                '^/api' : ''
            }
        }),
        proxy('/orderapi',{
            target : 'https://h5.ele.me',
            changeOrigin : true,
            // type: 'post',
            pathRewrite : {
                '^/orderapi' : ''
            }           
        })
    ]
    
}
module.exports = server_config;