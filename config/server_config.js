
const proxy = require('http-proxy-middleware');

const server_config = {
    host: 'localhost',
    port: 8080,
    livereload: true,
    // directoryListing: true,
    open: true,
    middleware : [
        proxy('/test',{
            target : 'https://h5.ele.me/', //https://www.smartisan.com/product/home
            changeOrigin : true,
            pathRewrite : {
                '^/test' : ''
            }
        }),
        proxy('api',{
            target : 'http://localhost:3000',
            changeOrigin: true
        })
    ]
    
}
module.exports = server_config;