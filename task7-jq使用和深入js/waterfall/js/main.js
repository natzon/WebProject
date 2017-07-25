// 需要知道一排能放多少张，第二排要放在第一排最短的后面


 $(window).on("load",function(){
 	    // 自己创建的键值对
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
        imgLocation();
        // 监听window的滚动事件
         window.onscroll = function(){
         	// 创建新box
         	 if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    // console.log("./img/"+$(value).attr("src"));
                    // 添加路径
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
                });
                // 判断是否加载
                imgLocation();
            }
       };

 });
 // 判断什么时候加载
 function scrollside(){
     var box = $(".box");
     // 最后一张图片中间到顶端的高度
     var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
     // 文档高度
     var documentHeight = $(document).width();
     // 滚动高度
     var scrollHeight = $(window).scrollTop();
     // 判断
     return (lastboxHeight<scrollHeight+documentHeight)?true:false;
 }
function imgLocation(){
	// 创建盒子对象
	 var box = $(".box");
	 // 获取第一张盒子的宽度
	  var boxWidth = box.eq(0).width();
	  // 获取一排当中放置图片的个数
	  var num = Math.floor($(window).width()/boxWidth);
	  // 获取盒子的高度，放置到数组里
	   var boxArr=[];
	   // index为当前位置，value为对象，遍历
	    box.each(function(index,value){
             // console.log(index+"--"+value);
             // 获取到每个盒子的高度
             var boxHeight = box.eq(index).height();
              if(index<num){
              	 boxArr[index]= boxHeight;
              	 // console.log(boxHeight);
              }
              // 开始摆放图片
              else{
              	// 获取最小高度
              var minboxHeight = Math.min.apply(null,boxArr);
              // 
              // 获取最小高度的位置
               var minboxIndex = $.inArray(minboxHeight,boxArr);
             
               // 摆放图片
                $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
                // 重新计算高度
                boxArr[minboxIndex]+=box.eq(index).height();

              }
	    });
}