
// 顶部菜单栏

$("#head-ul>li").not("li.first").each(function(index){
   $(this).mouseover(function(){
  
   $("i.arrow-icon").eq(index).addClass("trans");
   // $("div.submenu").eq(index).fadeIn();
   $("#head-ul>li .submenu").eq(index).addClass("submenu-change");
}).mouseout(function(){
	$("i.arrow-icon").eq(index).removeClass("trans");
	  // $("div.submenu").eq(index).fadeOut();
	   $("#head-ul>li .submenu").eq(index).removeClass("submenu-change");

});
});
// 搜索栏框框
$("#search-icon").click(function(){
    $("#search-box").addClass("scale");
});

$("#close-btn").click(function(){
   $("#search-box").removeClass("scale");

});

// 两种页面的切换
$("#list1").click(function(){
  $("div.lesson-list").eq(0).addClass("right-block");
  $("div.lesson-list").eq(1).removeClass("right-block");
});
$("#list2").click(function(){
  $("div.lesson-list").eq(1).addClass("right-block");
  $("div.lesson-list").eq(0).removeClass("right-block");
});


// 课程列表的特效
$("#lesson-ul>li").each(function(index){
    $(this).mouseover(function(){
    	$("div.cover-img").eq(index).addClass("opacity-change");
    }).mouseout(function(){
    	$("div.cover-img").eq(index).removeClass("opacity-change");
    });
});

// 页面2的课程列表特效
$("#page2 li").each(function(index){
  $(this).mouseover(function(){
    $("div.lessonplay").eq(index).addClass("opacity-change");
  }).mouseout(function(){
   $("div.lessonplay").eq(index).removeClass("opacity-change");
  });
});


