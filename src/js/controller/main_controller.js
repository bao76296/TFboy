const index = require('../views/main.html');

const render = () => {
    new Promise(function(resolve){
        var _link = $('<link>');
        _link.attr('href','../../static/swiper/animate.min.css');
        _link.attr('rel','stylesheet')
        _link.appendTo('head');
        var template = Handlebars.compile(index);
        // console.log(template)
        $('main').html(template);
        console.log(123)
        resolve();
    }).then(function(){
        console.log(444)
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
               
              }
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