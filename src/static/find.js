// const order_html = require('../js/views/rank.html');

// let list = $('.body-main-list')
// console.log(html,6666666666)
// (()=>{
//     console.log('load')
//     let data1 = null;
//     $.ajax({
//         url : '/orderapi/restapi/traffic/campagin/basketball/weekrank',
//         type : 'post',
//         success:(data)=>{
//             console.log(data)

//         }

//     })
//     // console.log(data1)
// })()
let btn = $('.player-button')
let video = $('.play-video')
let player = $('.player')
player.on('tap',function(){
    console.log(5555)
    console.log(btn.css('visibility'))
    if(btn.css('visibility')=='visible'){
        btn.css({'visibility':'hidden'})
        video[0].play();
    }else{
        btn.css({'visibility':'visible'})
        video[0].pause();
    }
});
