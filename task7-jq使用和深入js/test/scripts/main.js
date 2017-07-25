var timeoutid;
$(document).ready(function(){
    $("#tabfirst li").each(function(index){
    	var LiNode = $(this);
    	$(this).mouseover(function(){
    		timeoutid = setTimeout(function(){
    			// 移除class
    		$("div.content").removeClass("content");
    		$("#tabfirst li.tabin").removeClass("tabin");
    		$("div.contentfirst").eq(index).addClass("content");
    		LiNode.addClass("tabin");
    		},300);
    	}).mouseout(function(){
            clearTimeout(timeoutid);
    	})
    })
});