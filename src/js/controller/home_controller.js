const home_html = require('../views/home.html');

const render = () => {
    var template = Handlebars.compile(home_html);
    $('.root').html(template);
    // console.log(1)
   
}

export default { render };