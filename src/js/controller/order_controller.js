const order_html = require('../views/order.html');
const mock = require('../../static/mock/mock')
const render = () => {
    // $.ajax({
    //     url : 'http://localhost:8080/static/mock/order.json',
    //     // url:'/list',
    //     // dataType : 'jsonp',
    //     success:(data)=>{
    //         var template = Handlebars.compile(order_html);
    //         var template_str = template({data})
    //         $('main').html(template_str);
    //         // res.forEach(ele => {
    //         //     console.log(ele)
                
    //         // });
    //     }

    // })
    var loca = window.localStorage;
    var data = JSON.parse(loca.shopcar);
    var time = new Date().toLocaleString();
    data.time = time;
    var template = Handlebars.compile(order_html);
    var template_str = template({data})
    
    $('main').html(template_str);
    var timespan = $('.timespan')
    var ti = 10;

    var timer = setInterval(()=>{
        timespan.html(ti--)
        if(ti<=0){
            clearInterval(timer)
            var currentstatusoforder = $('.current-status-of-order')
            var order_paybtn = $('.order-paybtn')
            currentstatusoforder.html('订单超时已取消')
            order_paybtn.css({display:'none'})
        }
    },1000)
}


// module.exports = {
//     render
// }


export default {render} ;