console.log('test.js');
 
const add = require('./modules/add')
console.log(add(1,2)); 

const index_main_render = require('./controller/index_main_controller');
const find_render = require('./controller/find_controller');
const order_render = require('./controller/order_controller');
const mine_render = require('./controller/mine_controller');

index_main_render.render();
// find_render.render();
// order_render.render();
// mine_render.render();





$.ajax({
    url : 'http://localhost:8080/test/product/home',
    success : res =>{
        console.log(res);
    }
}) 

