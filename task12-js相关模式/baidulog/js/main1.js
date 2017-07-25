//简单工厂模式
// 简单工厂模式的优点：工厂类是整个模式的关键所在。它包含必要的判断逻辑，能够根据外界给定的信息，
//决定究竟应该创建哪个具体类的对象。用户在使用时可以直接根据工厂类去创建所需的实例，而无需了解这
//些对象是如何创建以及如何组织的。有利于整个软件体系结构的优化。

/*简单工厂模式的缺点：简单工厂模式违背了“开放封闭原则”，就是违背了“系统对扩展开放，对修改关闭”
的原则，因为当我新增加一个产品的时候必须修改工厂类，相应的工厂类就需要重新编译一遍。*/
var i =1;
var Factory = {};
Factory.manager = function(para){
	return new Factory[para]();
}
Factory.wheatherHover = function(){
	$("#weathershow").show();
}
Factory.wheatherOut = function(){
	$("#weathershow").hide();
}
Factory.messageclick = function(){
   if(i){
   		i = 0;
   		$("#inform").show();
   		
   }
   else{
   		$("#inform").hide();
   		i = 1;
   }
}
Factory.productHover = function(){
	$("#more-product").show();
}
Factory.productOut = function(){
	$("#more-product").hide();
}
Factory.leadClick = function(){
    if (i) {
    $("#tran-icon>em").addClass("change");
    $("#myfocus-menu").addClass("blk");
    i = i = 0;
    }else{
        $("#tran-icon>em").removeClass("change");
        $("#myfocus-menu").removeClass("blk");
        i = i = 1;
    }
}
Factory.scrollTop = function(){
	if ($(window).scrollTop() > 100) {
        $("#to-top").fadeIn(1000);
    } else {
        // 设置个延时
        $("#to-top").fadeOut(1000);
    }
}
Factory.clickTop = function(){
	//$('body,html').animate({scrollTop:0},1000);  
    if ($('html').scrollTop()) {
        $('html').animate({ scrollTop: 0 }, 1000);
        return false;
    }
    $('body').animate({ scrollTop: 0 }, 1000);
    return false;
}
Factory.skinChange = function(){
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
        $("#style").attr("href", storage.b);
    });
}
$("#weather,#weathershow").mouseover(function() {
    // 延时处理
    Factory.manager('wheatherHover');
	}).mouseout(function() {
    	Factory.manager('wheatherOut');
	});

//消息盒子部分
$("#message").click(function(event) {
	event.stopPropagation();
    Factory.manager('messageclick');
});
$("body").click(function(){
	$("#inform").hide();
});
//消息盒子部分end
//更多产品盒子
$("#more,#more-product").mouseover(function() {
    Factory.manager('productHover');
   
}).mouseout(function() {
    Factory.manager('productOut');
});
//更多产品盒子end 
$("#menu .menu-item").each(function(index) {
    var Node = $(this);
    $(this).click(function() {
        $("#menu span.color").removeClass("color");
        Node.addClass("color");
        $("div.block").removeClass("block");
        $("div.tcon").eq(index).addClass("block");
    })
});


$("#mylead").click(function() {
	Factory.manager('leadClick');
    event.stopPropagation();
});
$("body").click(function() {
    $("#tran-icon>em").removeClass("change");
    $("#myfocus-menu").removeClass("blk");
})
//回到顶部
$(window).scroll(function() {
    Factory.manager('scrollTop');
});
$("#to-top").click(function() {
    Factory.manager('clickTop');
});
// 换肤部分
// 记住换肤
var b = localStorage.getItem('b');
	if (b == null && b == undefined) {
	    $("#style").attr('href', './css/main.css');
	} else {
	    $("#style").attr('href', b);
}
// 记住换肤end
// 换肤部分
// 显示
$("#change-skin").click(function() {
	Factory.manager('skinChange');
});
// 收起
$("#back").click(function() {
    $("#skin").fadeOut(1000);
});