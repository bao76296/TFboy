
const proxy = require('http-proxy-middleware');

const server_config = {
    host: 'localhost',
    port: 8080,
    livereload: true,
    // directoryListing: true,
    open: true,
    middleware : [
        proxy('/test',{
            target : 'https://www.smartisan.com/', //https://www.smartisan.com/product/home
            changeOrigin : true,
            pathRewrite : {
                '^/test' : ''
            }
        }),
        proxy('/api',{
            target : 'https://h5.ele.me',
            changeOrigin: true,
            pathRewrite : {
                '/api' : ''
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