
    // 登录账号判定
    // 登录账号都正确，点击登录按钮，登录模块消失
    $(".submit_button").on("click", function () {
        if ($.cookie($(".username").val()) == null) { //判断账号在cookie中是否存在
            $(".username").parent().addClass("has-error").removeClass("has-success");
        } else {
            $(".username").parent().addClass("has-success").removeClass("has-error");
        }
        if ($.cookie($(".username").val()) != $(".password").val()) { //判断cookie该key中的值是否和输入框中的值相等
            $(".password").parent().addClass("has-error").removeClass("has-success");
        } else {
            $(".password").parent().addClass("has-success").removeClass("has-error");
        }
        if ($(".username").parent().hasClass("has-success") && $(".password").parent().hasClass("has-success")) {
            $("#back").css("display", "none");
        }
    })
    $(".username").on("blur", function () {
        if ($(".username").val() == "") { //输入框内容为空，清除样式
            $(this).parent().removeClass("has-error").removeClass("has-success");
        }
    })
    $(".password").on("blur", function () {
        if ($(".password").val() == "") { //输入框内容为空，清除样式
            $(this).parent().removeClass("has-error").removeClass("has-success");
        }
    })