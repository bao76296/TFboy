const main = require('../views/main.html');
const _swiper_one = require('../views/main_swiper_one.html');
const _banner = require('../views/main_banner.html');
const _swiper_two = require('../views/main_swiper_two.html');
const _main_list = require('../views/main_shoplist.html');
const _main_shop_list = require('../views/main_shoplist_data.html');

import BScroll from 'better-scroll'
import main_swiper from '../models/main_data';



var bannerData = [];
var swpierTwoData = [];
var shoplist = [];

const render =  async () => {
        var main_html = Handlebars.compile(main);
        $('main').html(main_html());
        await init_html();
        // console.log(swpierTwoData);
        // var bss = new BScroll('.root', {
        //     scrollY: true,
        //     bounce: {
        //         top: false
               
        //     }
        // });
        // console.log(BScroll);
        window.loading = true;
        $(window).on('scroll',async function(){
            if($(window).scrollTop() + $('.root').height() == $('main').height() && window.loading){
                window.loading = false;
                await getShopList();
                console.log(123)
                window.loading = true;
            }
        })
        
}

//渲染界面
const init_html = async () => {
    
    await swiper_html();
    await banner_html();
    await swiper_two_html();
    await shop_list();
    
}

//商家列表
const shop_list = async () => {
    
    var template = Handlebars.compile(_main_list);
    var _html = template(); 
    $('.__shoplist').html(_html);
    await getShopList();
}

//添加 商家列表
const getShopList = async () => {
    await getShoplistData();
    var template = Handlebars.compile(_main_shop_list);
    var _html = template({data : shoplist});
    $('.shoplist').before(_html); 
}



const getShoplistData = async () => {
    
    var temps = (await main_swiper.main_shoplist()).items;
    setImageHash(temps, 'image_path')
    
    temps.forEach((item, ele) => {
        if(item.restaurant.activities){
            if(item.restaurant.activities[0]){
                item.restaurant.tips_one ={
                    tips : item.restaurant.activities[0].tips,
                    icon_name : item.restaurant.activities[0].icon_name
                }
            }
            if(item.restaurant.activities[1]){
                item.restaurant.tips_two ={
                    tips : item.restaurant.activities[1].tips,
                    icon_name : item.restaurant.activities[1].icon_name
                } 
            }
        }
    })
  
 
    shoplist = temps;
    // shoplist.push( ... ((await main_swiper.main_shoplist()).items));
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

const setImageHash = (arr, prop) => {
    arr.forEach(item => {
        let str = '';
        if(prop){
            str = item.restaurant.image_path ;
        }
        else{
            str = item.image_hash;
        }
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