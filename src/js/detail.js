const header_html = require('./views/detail/detail_header.html');
const swiper_html = require('./views/detail/detail_swiper.html');
const main_html = require('./views/detail/detail_main.html');
const tab_html = require('./views/detail/detail_tab.html');
const footer_html = require('./views/detail/detail_footer.html');

$(function(){
    render();
})

//餐馆信息数据
var data_rst = null;

//餐馆优惠数据
var redpack = null;

//轮播图数据
var recommend = null;

//餐馆菜单数据
var menu = null;

const render = async () =>{
    await setData();
    _headerInit();
    _swiperInit();
    _mainInit();
    _tabInit();
    _footerInit();
    shopCar();
} 

//main html 渲染
const _mainInit = () => {
    var temp = Handlebars.compile(main_html);
    var _html = temp({
        menu : menu
    })
    var height = $('.shoptab').height();
    $('.menu').html(_html);
    $('.menu__right ul li').on('tap', function(){
        var txt = $(this).addClass('active').siblings().removeClass('active').end().find('a').html().trim();
        $('.food_name').each((item, ele) =>{
           
            if($(ele).html().trim() == txt){

                $(window).scrollTop($(ele).parent().parent().position().top - height)
            }
           
        })
    })
}

//轮播图渲染
const _swiperInit = () => {
    var temp = Handlebars.compile(swiper_html);
    var _html = temp({
        recommend : recommend
    })
    $('.__swiper').html(_html);
    swiperInit();
}

//header数据渲染
const _headerInit = ()=> {
    var temp = Handlebars.compile(header_html);
    var _html = temp({
        data_rst : data_rst,
        redpack : redpack
    });
    $('header').html(_html);
}

//tab 分类数据
const _tabInit = () => {
    var temp = Handlebars.compile(tab_html);
    var _html = temp();
    $('.shoptab').html(_html)
}

//footer渲染
const _footerInit = () => {
    var temp = Handlebars.compile(footer_html);
    var _html = temp();
    $('main').after(_html);
   
}

//购物车
const shopCar = () => {
    
   
    if(window.localStorage.shopcar){
        var data = JSON.parse(window.localStorage.shopcar)
        $('.conimg').addClass('active').find('.shop_song').text('去结算').end().find('.shop').text('￥' + parseFloat(data.price).toFixed(2));
    }
    


    $('svg').on('tap', function(){
        let str = $(this).parent().find('div').text().trim();
        str = str.substring(1, str.length)
        var price = parseFloat(str);
        var shopName = $('.name span').text().trim();
        var num = 0;
        var imgSrc = $('.conimg img').attr('src');
        var data = null;
        var _localstorage = window.localStorage.shopcar;
        // if(!_localstorage){
            $('.shop_song').on('tap', function(){
                window.location.href = 'http://localhost:8080/#/order';
            })
        // }
        data = _localstorage == undefined ? {} : JSON.parse(_localstorage);
        data.shopName = shopName;
        data.num = data.num == undefined ? 1 : ++data.num;
        data.goodName = $(this).parent().parent().find('.swiper__foods--name').text().trim();
        data.price = data.price == undefined ? price : data.price + price;
        // console.log(data);
        window.localStorage.shopcar = JSON.stringify(data) ;
        $('.conimg').addClass('active').find('.shop_song').text('去结算').end().find('.shop').text('￥' + parseFloat(data.price).toFixed(2));
     })
}

//数据整理
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

//detail数据获取
const getData = () => {
    return $.ajax({
        url : 'http://localhost:3000/my/detail',
        type : 'get',
        success : data =>{
            return data;
        }
    })
}

//轮播图初始化
const swiperInit = () => {
    new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        slidesPerView : 3,
        centeredSlides : false,
    })
}
