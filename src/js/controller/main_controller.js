const main = require('../views/main.html');
const _swiper_one = require('../views/main_swiper_one.html');
const _banner = require('../views/main_banner.html');
const _swiper_two = require('../views/main_swiper_two.html');

import main_swiper from '../models/main_data';

var bannerData = [];
var swpierTwoData = [];
const render =  async () => {
        var main_html = Handlebars.compile(main);
        $('main').html(main_html());
        await init_html();
        console.log(swpierTwoData);
        
}

//渲染界面
const init_html = async () => {
    
    await swiper_html();
    await banner_html();
    await swiper_two_html();
    
}

//打折商品
const banner_html = async () => {
    setImageHash(bannerData[1].entries);
    var template = Handlebars.compile(_banner);
    var _html = template({banner_data : bannerData[1]});
    $('.__banner').html(_html);
    
}

//第一个轮播图的数据处理
const getSwiperData = async  () => {
    bannerData =  await main_swiper.main_swiper();
    bannerData[0].entriesSlice = [];
    var arr =  bannerData[0].entries;
    setImageHash(arr);
    arr_slice(bannerData[0].entriesSlice, arr, 10);
}

//第一个轮播图的渲染
const swiper_html = async () => {
    await getSwiperData();
    var  template = Handlebars.compile(_swiper_one);
    var _html = template({swiper_data : bannerData[0]})
    $('.__swiper').html(_html);
    new Swiper('.mini__swiper', {
        // autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          }
    })
}



//第二个轮播图的数据
const getSwiperDataTwo = async () => {
    swpierTwoData = await main_swiper.main_two_swiper();
    setImageHash(swpierTwoData);
}


//第二个轮播图的渲染
const swiper_two_html = async() => {
    await getSwiperDataTwo();
    var template = Handlebars.compile(_swiper_two);
    var _html = template({data : swpierTwoData});
    $('.__advertising').html(_html);
    new Swiper('.swiper__tow', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          }
    })
}

const setImageHash = arr => {
    arr.forEach(item => {
        var str = item.image_hash; 
        item.image_hash = str.substring(0,1) + '/'+ str.substring(1,3) + '/' + str.substring(3,str.length);
        if(item.more){
            item.more = JSON.parse(item.more);
        }
    });
}

const arr_slice = (con_entries,arr, num) => {
    var length = arr.length;
    if (length <= num) {
        con_entries.push(arr);
    } else {
        con_entries.push(arr.slice( 0, num));
        arr_slice(con_entries, arr.slice(num , length), num);
    }
}


export default {render};