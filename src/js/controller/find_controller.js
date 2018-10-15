const find_html = require('../views/find.html');

const render = () => {
    var template = Handlebars.compile(find_html);
    $('.root').html(template);
}

module.exports = {
    render
}