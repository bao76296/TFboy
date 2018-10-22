$('.log_out').on('touchend',()=>{ //退出登录
    localStorage.clear('login_id');
    localStorage.clear('logged_in');
    open('/#','_self');
})
$('.information_header_left img').on('touchend',()=>{ // 返回上一个界面
    open('/#','_self');        
})