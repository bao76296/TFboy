const mine_html = require('../views/mine.html');

const render = () => {
    var template = Handlebars.compile(mine_html);
    $('.root').html(template);
}

module.exports = {
    render
}