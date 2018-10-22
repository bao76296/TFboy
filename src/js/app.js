console.log('test.js');
 
// const add = require('./modules/add')
// console.log(add(1,2)); 

// const index_main_render = require('./controller/home_controller');
import index_main_render from './controller/home_controller'
// const find_render = require('./controller/find_controller');
// const order_render = require('./controller/order_controller');
// const mine_render = require('./controller/mine_controller');
 
index_main_render.render();

import Route from './route/index'

const route = new Route({ initial : '#/index'});

route.init();

















// find_render.render();
// order_render.render();
// mine_render.render(); 

// import {test} from "./tttt"


// console.log('????')
// var lo = () => {
//     console.log(123556666666666666555)
// }
// lo();
// var set = new Set();
// set.add(1)
// test();



// $.ajax({
//     url : 'http://localhost:8080/test/product/home',
//     success : res =>{
//         // console.log(res);
//     }
// }) 



