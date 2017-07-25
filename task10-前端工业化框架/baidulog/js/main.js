// 加载页面的时候执行
$(document).ready(function() {
    // 记住换肤
    var b = localStorage.getItem('b');
    if (b == null && b == undefined) {
        $("#style").attr('href', './css/main.css');
    } else {
        $("#style").attr('href', b);
    }
    // 记住换肤end





    // 天气部分
    $("#weather,#weathershow").mouseover(function() {
        // 延时处理
        $("#weathershow").show();
    }).mouseout(function() {
        $("#weathershow").hide();
    });
    // 天气部分end
    // 消息盒子部分
    $("#message").click(function(event) {
        $("#inform").show();
        //阻止冒泡,免得会点到body
        event.stopPropagation();
    });
    $("body").click(function() { $("#inform").hide(); });

    // 消息盒子部分end

    // 个人信息盒子
    $("#user-name,#userbox").mouseover(function() {
        // 延时处理
        $("#userbox").show();
    }).mouseout(function() {
        $("#userbox").hide();
    });
    // 个人信息盒子end

    // 设置盒子
    $("#setting,#settingbox").mouseover(function() {
        // 延时处理
        $("#settingbox").show();
    }).mouseout(function() {
        $("#settingbox").hide();
    });
    // 设置盒子end

    //更多产品盒子
    $("#more,#more-product").mouseover(function() {
        // 延时处理
        $("#more-product").show();
    }).mouseout(function() {
        $("#more-product").hide();
    });
    //更多产品盒子end 


    // tab标签切换
    $("#menu .menu-item").each(function(index) {
        var Node = $(this);
        $(this).click(function() {
            $("#menu span.color").removeClass("color");
            Node.addClass("color");
            $("div.block").removeClass("block");
            $("div.tcon").eq(index).addClass("block");
        })
    });
    // tab标签切换end

    // 我的导航
    // $("#mylead").toggle(
    //     function() {
    //         $("#tran-icon>em").addClass("change");
    //         $("#myfocus-menu").addClass("blk");
    //     },
    //     function() {
    //         $("#tran-icon>em").removeClass("change");
    //         $("#myfocus-menu").removeClass("blk");
    //     }
    // );
    var i = 1;
    $("#mylead").click(function() {
        if (i) {
            $("#tran-icon>em").addClass("change");
            $("#myfocus-menu").addClass("blk");
            i = i - 1;
        }else{
            $("#tran-icon>em").removeClass("change");
            $("#myfocus-menu").removeClass("blk");
            i = i+1;
        }
        event.stopPropagation();
    });
    $("body").click(function() {
            $("#tran-icon>em").removeClass("change");
            $("#myfocus-menu").removeClass("blk");
        })
    // 我的导航end

    // 回到顶部相关
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#to-top").fadeIn(1000);
        } else {
            // 设置个延时
            $("#to-top").fadeOut(1000);
        }
    });
    $("#to-top").click(function() {
        //$('body,html').animate({scrollTop:0},1000);  
        if ($('html').scrollTop()) {
            $('html').animate({ scrollTop: 0 }, 1000);
            return false;
        }
        $('body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
    // 回到顶部end

    // 换肤部分
    // 显示
    $("#change-skin").click(function() {

        $("#skin").fadeIn(1000);
        $("#case1").click(function() {
            var storage = window.localStorage;
            storage.b = "./css/main1.css";
            $("#style").attr("href", storage.b);
        });
        $("#case2").click(function() {
            var storage = window.localStorage;
            storage.b = "./css/main2.css";
            $("#style").attr("href", storage.b);
        });
        $("#case3").click(function() {
            var storage = window.localStorage;
            storage.b = "./css/main.css";

            0
            $("#style").attr("href", storage.b);
        });

    });
    // 收起
    $("#back").click(function() {
        $("#skin").fadeOut(1000);

    });






});
