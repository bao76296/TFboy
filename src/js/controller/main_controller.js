import { async } from 'rxjs/internal/scheduler/async';

const index = require('../views/main.html');
const main_module = require('../models/main_module.js');

let main_swiper_data = null;
let banner_data = null;

const render = () => {

    initHtml();
       
        
        
}

const initHtml = async () => {
        await getSwiperDate();
        var template = Handlebars.compile(index);
        console.log(main_swiper_data)
        var _html = template({swiper_data : main_swiper_data, banner_data : banner_data});
        console.log(template)
        $('main').html(_html);
        
        swiper();

        
}

const swiper = () => {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
           
          }
    })
    return mySwiper;
}

const getSwiperDate = async () => {
   
    let data = await main_module.main_swiper();
    main_swiper_data = data[0];
    banner_data = data[1];
    var temp_arr = main_swiper_data.entries;
    var length = temp_arr.length;
    var con_entries = [];
    con_entries.push(temp_arr.slice(0));
   
}

const arr_slice = (arr,num) => {
    var con_entries = [];
    var length = arr.length;
    if(length <= num){
        con_entries.push(arr);
    }else{
        
     
        con_entries.push(arr.slice(0,num));
        
        arr_slice(arr.slice(num+1,length))
        
    }

    return con_entries;
}


export default {render};