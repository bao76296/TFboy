const rank_html = require('../js/views/rank.html');

let list = $('.body-main-list');
let templatehtml = Handlebars.compile(rank_html);
(()=>{
    console.log('load')
    let data1 = null;
    $.ajax({
        url : '/orderapi/restapi/traffic/campagin/basketball/weekrank',
        type : 'post',
        success:(res)=>{
            // console.log(res.data)
            // // var 
            
           
            // console.log(logosrc)
            // console.log(aaa,999999999999999)
            // var o = data[0].logo;
            var data = res.data;
            data.forEach((ele,index )=> {
                ele.num = index + 1;
                // console.log(index,44444444444444)
                var logosrc = ele.logo
                var aaa = logosrc.substr(3,logosrc.length )
                var imgsrc = 
               ' http://fuss10.elemecdn.com/'+ele.logo[0]+'/'+ele.logo[1]+ele.logo[2]+'/'+aaa+'.png?imageMogr/format/webp/';
                ele.src = imgsrc;
                
            });
            // data[0].src = o;

            var templatestr =  templatehtml({data});
            list.html(templatestr)

        }

    })
    // console.log(data1)
})()
let btn = $('.player-button')
let video = $('.play-video')
let player = $('.player')
let header = $('.player-header')
player.on('tap',function(){
    console.log(5555)
    console.log(btn.css('visibility'))
    if(btn.css('visibility')=='visible'){
        btn.css({'visibility':'hidden'})
        header.css({'visibility':'hidden'})
        video[0].play();
    }else{
        btn.css({'visibility':'visible'})
        header.css({'visibility':'visible'})
        video[0].pause();
    }
});
