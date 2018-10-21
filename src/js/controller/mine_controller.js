const mine_html = require('../views/mine.html');

const render = () => {
    var template = Handlebars.compile(mine_html);
    $('main').html(template);
    as();
}

const as = ()=> {
    $('.login_box').on('click',()=>{
        
    })
}












// module.exports = {
//     render
// }

export default {render}