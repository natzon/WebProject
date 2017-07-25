$(document).ready(function() {
    refreshNews("推荐");
     $('nav a').click(function(e){
        e.preventDefault();
         var type = $(this).text();
         refreshNews(type);   
    });
});
// 刷新函数
function refreshNews(type) {
    // 连接
    var $lists = $("#lists");
    $lists.empty();
    $.ajax({
        type: 'GET',
        url: '/news',
        dataType: "json",
        data:{newstype:type},
        success: function(data) {
            console.log(data);
            data.forEach(function(item,index,array){
                var $list = $('<li></li>').addClass("news-list").prependTo($lists);
                var $newsImg = $("<div></div>").addClass("newsimg").appendTo($list);
                var $img = $("<img>").attr("src", item.newsimg).appendTo($newsImg); 
                $newsContent = $("<div><div>").addClass("newscontent").appendTo($list);
                $h1 = $("<h1></h1>").html(item.newstitle).appendTo($newsContent);
                var $p = $("<p></p>").appendTo($newsContent);
                var $newsTime = $("<span></span>").addClass("newstime").html(item.newstime).appendTo($p);
                var $newsSrc = $("<span></span>").addClass("newssrc").html(item.newssrc).appendTo($p);
            });
        }
    })
}
