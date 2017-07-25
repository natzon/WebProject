// 打开后台页面的时候，发送请求，刷新新闻列表
$(document).ready(function(){
	var $newsTable = $("#tbid");
	// 刷新函数
	refreshNews(null);
   // 提交新闻
   $("#btnsubmit").click(function(e){
     // 禁止默认的提交
     e.preventDefault();
     // 输入判断
     // 不能添加的情况
     // ===是判断值和类型是否都相等,val()和value是不同的，要区别看待
     if($("#newstitle").val()==="" || $("#newsimg").val()==="" ||$("#newstime").val()==="" ||$("#newssrc").val()===""){
         alert("caonima");
         if ($("#newstitle").val()==="") {
         	// has-error是bootstrap的一个类,父元素有这个类的话，就会变成红色
         	$("#newstitle").parent().addClass("has-error");
         }else{
         	$("#newstitle").parent().removeClass("has-error");
         }
          if ($("#newsimg").val()==="") {
         	
         	$("#newsimg").parent().addClass("has-error");
         }else{
         	$("#newsimg").parent().removeClass("has-error");
         }
          if ($("#newstime").val()==="") {
         	
         	$("#newstime").parent().addClass("has-error");
         }else{
         	$("#newstime").parent().removeClass("has-error");
         } 
         if ($("#newssrc").val()==="") {
         	
         	$("#newssrc").parent().addClass("has-error");
         }else{
         	$("#newssrc").parent().removeClass("has-error");
         }
     }else{
     	//都不为空的时候传输对象
     	// 定义个json对象，键值对
     	   
     	var jsonNews = {
     		newstitle: $("#newstitle").val(),
     		newstype: $("#newstype").val(),
     		newsimg:$("#newsimg").val(),
     		newstime:$("#newstime").val(),
     		newssrc:$("#newssrc").val()
     	};
     
     	// 提交添加
     	$.ajax({
     		url:"../baidunew/server/insert.php",
     		type:"post",
     		data:jsonNews,
     		// 本来没有json，用的人多了也就成了json
     		dataType:"json",
     		// 可以看返回data的内容
     		success:function(data){
     			// console.log(data);
     			refreshNews(null);

     		}
     	});

     }
     
}); 

    // 因为删除按钮是动态生成的，所以无法直接给他添加时间，需要通过时间委托的方式来添加事件,删除功能
    var deleteId = null;
    $newsTable.on('click','.btn-danger',function(e){
    	console.log("click");
    	$("#deleteModal").modal("show");
    	deleteId = $(this).parent().prevAll().eq(3).html();
    	console.log(deleteId);
    });
    $("#deleteModal #confirmDelete").click(function(){
        if(deleteId){
        	$.ajax({
     		url:"../baidunew/server/delete.php",
     		type:"post",
     		data:{newsid:deleteId},
     		// 本来没有json，用的人多了也就成了json
     		dataType:"json",
     		// 可以看返回data的内容
     		success:function(data){
     			console.log(data);
     			refreshNews(null);
     			$("#deleteModal").modal("hide");
     		}
     	});
        	
     		
        }
    });


// 修改新闻的功能
var updateId = null;
    $newsTable.on('click','.btn-primary',function(e){
    	
    	$("#updateModal").modal("show");
    	updateId = $(this).parent().prevAll().eq(3).html();
    	console.log(updateId);
    	$.ajax({
    		url:'../baidunew/server/curnews.php',
    		type:'get',   	
    		datatype:'json',
    		data:{newsid:updateId},
    		success:function(data){
    			console.log(data);
    			var utime = data[0].newstime.split(' ')[0];
    			$("#unewstitle").val(data[0].newstitle);
    			$("#unewstype").val(data[0].newstype);
    			$("#unewsimg").val(data[0].newsimg);
    			$("#unewssrc").val(data[0].newssrc);
    			// 分解成字符串数组,取做左半边的部分
    			$("#unewstime").val(utime);

    			
    		}
    	});
    	
    });
    $("#updateModal #confirmUpdate").click(function(){
    	// 更新数据
    	$.ajax({
            url:'../baidunew/server/update.php',
            type:'post',
            data:{
            	newstitle:$('#unewstitle').val(),
            	newstype:$('#unewstype').val(),
            	newsimg:$('#unewsimg').val(),
            	newstime:$('#unewstime').val(),
            	newssrc:$('#unewssrc').val(),
            	id:updateId
            },
            success:function(data){
            	$("#updateModal").modal('hide');
            	console.log(data);
            	refreshNews(null);
            }
    	});

    });
// 修改数据end



    function refreshNews(type){
	// 清空所有的新闻
	$newsTable.empty();
	// 调用ajax实现数据获取
	$.ajax({
		type: 'GET',
        url: "../baidunew/server/getnews.php",
        datatype: "json",
        data:{newstype:type},
		success:function(data){
			
			// 遍历data数据,each只能遍历jquery对象,forEach是原生的js
			data.forEach(function(item,index,array){
				
				var $tdid = $("<td>").html(item.id);
				var $tdtype = $("<td>").html(item.newstype);
				var $tdtitle = $("<td>").html(item.newstitle);
				var $tdimg = $("<td>").html(item.newsimg);
				var $tdsrc = $("<td>").html(item.newssrc);
				var $tdtime = $("<td>").html(item.newstime);
				var $tdctrl = $("<td>");
				var $btnupdate = $("<button>").addClass("btn btn-primary btn-xs").html("修改");
				var $btndelete = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
				$tdctrl.append($btnupdate,$btndelete);
				var $tRow = $("<tr>");
				$tRow.append($tdid,$tdtype,$tdtitle,$tdtime,$tdctrl);
				$newsTable.append($tRow);
			})
			// for(var i = 0; i<data[0].length;i++){
			// 	var $tdid = $("<td>").html(data[0][i].id);
			// 	var $tdtype = $("<td>").html(data[0][i].newstype);
			// 	var $tdtitle = $("<td>").html(data[0][i].newstitle);
			// 	var $tdimg = $("<td>").html(data[0][i].newsimg);
			// 	var $tdsrc = $("<td>").html(data[0][i].newssrc);
			// 	var $tdtime = $("<td>").html(data[0][i].newstime);
			// 	var $tdctrl = $("<td>");
			// 	var $btnupdate = $("<button>").addClass("btn btn-primary btn-xs").html("修改");
			// 	var $btndelete = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
			// 	$tdctrl.append($btnupdate,$btndelete);
			// 	var $tRow = $("<tr>");
			// 	$tRow.append($tdid,$tdtype,$tdtitle,$tdtime,$tdctrl);
			// 	$newsTable.append($tRow);
			// }

		}


	})
}
})


