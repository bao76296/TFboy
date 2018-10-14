const index = require('../views/index.html');

const render = () => {
    var _link = $('<link>');
    _link.attr('href','../../static/swiper/animate.min.css');
    _link.attr('rel','stylesheet')
    _link.appendTo('head');
    var template = Handlebars.compile(index);
    // console.log(template)
    $('main').html(template);
    console.log(Swiper)
    $(function(){
        var mySwiper = new Swiper('.swiper-container-horizontal', {
            autoplay: true,//可选选项，自动滑动
        })
    })
    


    // var mySwiper = new Swiper ('.swiper-container', {
    //     autoplay: true
    //     // freeMode : false,
    //     // direction: 'vertical', // 垂直切换选项
    //     // loop: true, // 循环模式选项
        
    //     // // 如果需要分页器
    //     // pagination: {
    //     //   el: '.swiper-pagination',
    //     // },
        
        
    //   })  
}

// module.exports = {
//     render
// }

export default {render};