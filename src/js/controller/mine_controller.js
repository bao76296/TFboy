const mine_html = require('../views/mine.html');

const render = () => {
    var template = Handlebars.compile(mine_html);
    $('main').html(template);
    as();
}

const as = ()=> {
    let read_local = localStorage.getItem('logged_in');
    let login_id = localStorage.getItem('login_id');
    console.log(read_local);
    if (read_local === 'logged') { //登录状态
        let num_id = randomInt(999,9999999);
        // 登录后的头像与ID
        $('.login_box').css('display','none');
        $('.logged_box').css('display','flex');
        $('.logged_word p:first').text(num_id);
        $('.logged_word p>span').text(login_id);
        // 登录后的钱包状态
        $('.wallet_num p:first').css('display','none');
        $('.wallet_num p:eq(1)').css('display','block');
        // 登录后的红包状态
        $('.red_num p:first').css('display','none');
        $('.red_num p:eq(1)').css('display','block');
        // 登录后的金币状态
        $('.gold_num p:first').css('display','none');
        $('.gold_num p:eq(1)').css('display','block');
        $('.logged_box').on('touchend', ()=>{
        })
    }
    if (read_local === null) { //未登录状态
        // 未登录时的头像
        $('.login_box').css('display','flex');
        $('.logged_box').css('display','none');
        // 未登录时的钱包状态
        $('.wallet_num p:first').css('display','block');
        $('.wallet_num p:eq(1)').css('display','none');
        // 未登录时的红包状态
        $('.red_num p:first').css('display','block');
        $('.red_num p:eq(1)').css('display','none');
        // 未登录时的金币状态
        $('.gold_num p:first').css('display','block');
        $('.gold_num p:eq(1)').css('display','none');
    }
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}










// module.exports = {
//     render
// }

export default {render}