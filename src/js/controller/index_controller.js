const index = require('../views/index.html');

const render = () => {
    
    var template = Handlebars.compile(index);
    // console.log(template)
    $('main').html(template);
    // document.querySelector('.root').innerHTML = index_main_tmp;
   
}

// module.exports = {
//     render
// }

export default {render};