const order_html = require('../views/order.html');
const mock = require('../../static/mock/mock')
const render = () => {
    $.ajax({
        url : 'http://localhost:8080/static/mock/order.json',
        // url:'/list',
        // dataType : 'jsonp',
        success:(data)=>{
            var template = Handlebars.compile(order_html);
            var template_str = template({data})
            $('main').html(template_str);
            // res.forEach(ele => {
            //     console.log(ele)
                
            // });
        }

    })

}


// module.exports = {
//     render
// }


export default {render} ;