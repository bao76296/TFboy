const order_html = require('../views/order.html');

const render = () => {
    var template = Handlebars.compile(order_html);
    $('main').html(template);
}

// module.exports = {
//     render
// }


export default {render} ;