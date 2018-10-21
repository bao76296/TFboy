const header_html = require('./views/detail_header.html');
const swiper_html = require('./views/detail_swiper.html');
const main_html = require('./views/detail_main.html');

$(function(){
    render();
})

var data_rst = null;
var redpack = null;
var recommend = null;
var menu = null;
var menu_list = [];
const render = async () =>{
    await setData();
    _headerInit();
    _swiperInit();
    _mainInit();
} 

const _mainInit = () => {
    var temp = Handlebars.compile(main_html);
    var _html = temp({
        menu : menu
    })
    $('.menu').html(_html)
}


const _swiperInit = () => {
    var temp = Handlebars.compile(swiper_html);
    var _html = temp({
        recommend : recommend
    })
    $('.__swiper').html(_html);
    swiperInit();
}


const _headerInit = ()=> {
    var temp = Handlebars.compile(header_html);
    var _html = temp({
        data_rst : data_rst,
        redpack : redpack
    });
    $('header').html(_html);
}

const setData = async () => {
    var data  = await getData();
    data_rst = data.rst;
    redpack = data.redpack[0];
    recommend = data.recommend[0].items;
    recommend.forEach(element => {
        var str = element.photos[0];
        element.image_hash = str.substring(0,1) + '/'+ str.substring(1,3) + '/' + str.substring(3,str.length);
        element.price =  element.specfoods[0].price;
    });
    menu = data.menu;
    menu.forEach( ele => {
        ele.foods.forEach( ele => {
            var str = ele.image_path;
            ele.image_hash = str.substring(0,1) + '/'+ str.substring(1,3) + '/' + str.substring(3,str.length);
            ele.price =  ele.specfoods[0].price;
        })
    })
}

const getData = () => {
    return $.ajax({
        url : 'http://localhost:3000/my/detail',
        type : 'get',
        success : data =>{
            return data;
        }
    })
}

const swiperInit = () => {
    new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        slidesPerView : 3,
        centeredSlides : false,
    })
}
