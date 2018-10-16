const mine_html = require('../views/mine.html');

const render = () => {
    var template = Handlebars.compile(mine_html);
    $('main').html(template);
    as();
}

const as = ()=> {
    $('.btn').on('click',()=>{
        alert('我在做实验！！！')
    })
}












// module.exports = {
//     render
// }

export default {render}