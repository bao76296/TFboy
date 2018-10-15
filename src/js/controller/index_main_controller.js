const index_main_tmp = require('../views/index_main.html');

const home_html = require('../views/home.html');
const render = () => {
    console.log(home_html);
    var template = Handlebars.compile(home_html);
    $('.root').html(template);
    // document.querySelector('.root').innerHTML = index_main_tmp;
    $('.footer__item').on('tap',function(){
        console.log(1)
    })
}

module.exports = {
    render
}