// 百度首页交互js
var baiDu ={
	init:function(){
		this.defaultFoucs();
		this.BaiduSetting();
	},
	/*设置默认焦点*/
	defaultFoucs:function(){
		$('#searchInput').focus();
	},
	// 设置侧边栏的显示和隐藏
	BaiduSetting:function(){
		$('#more,#moreProduct').mouseover(function(){
			$("#moreProduct").show();
		}).mouseout(function(){
			$("#moreProduct").hide();
		})
		

	}
}

// 加载执行
$(function(){
	baiDu.init();
})