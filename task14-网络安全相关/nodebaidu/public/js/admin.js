$(document).ready(function() {
    var $newsTable = $("#newstable tbody");
    refreshNews();
    // 添加新闻
    $("#btnsubmit").click(function(e) {
        e.preventDefault();
        // 输入判断
        if ($("#newstitle").val() === "" || $("#newsimg").val() === "" || $("#newstime").val() === "" || $("#newssrc").val() === "") {
            if ($("#newstitle").val() === "") {
                // has-error是bootstrap的一个类,父元素有这个类的话，就会变成红色
                $("#newstitle").parent().addClass("has-error");
            } else {
                $("#newstitle").parent().removeClass("has-error");
            }
            if ($("#newsimg").val() === "") {

                $("#newsimg").parent().addClass("has-error");
            } else {
                $("#newsimg").parent().removeClass("has-error");
            }
            if ($("#newstime").val() === "") {
                $("#newstime").parent().addClass("has-error");
            } else {
                $("#newstime").parent().removeClass("has-error");
            }
            if ($("#newssrc").val() === "") {
                $("#newssrc").parent().addClass("has-error");
            } else {
                $("#newssrc").parent().removeClass("has-error");
            }
        } else {
            var jsonNews = {
                newstitle: $("#newstitle").val(),
                newstype: $("#newstype").val(),
                newsimg: $("#newsimg").val(),
                newstime: $("#newstime").val(),
                newssrc: $("#newssrc").val(),
                _csrf:$("#_csrf").val()
            };
            // 提交添加
            $.ajax({
                url: "/admin/insert",
                type: "post",
                data: jsonNews,
                // 本来没有json，用的人多了也就成了json
                dataType: "json",
                // 可以看返回data的内容
                success: function(data) {
                    console.log(data);
                    refreshNews();
                    $("#newstitle").val('');
                    $("#newstype").val('');
                    $("#newsimg").val('');
                    $("#newstime").val('');
                    $("#newssrc").val('');
                }
            });
        }
    });

    $.ajax({
        url:'/admin/gettoken',//请求页面
        type:'get',
        datatype:'json',
        success:function(data){
          $("#_csrf").val(data.csrfToken);//将getToken值入到#_csrf
        }
      })

    // 删除函数
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
	    console.log("click");
	    $("#deleteModal").modal("show");
	    deleteId = $(this).parent().prevAll().eq(3).html();
        console.log(deleteId);
    });
    $("#deleteModal #confirmDelete").click(function(){
        if(deleteId){
        	$.ajax({
	     		url:"/admin/delete",
	     		type:"post",
	     		data:{newsid:deleteId},
	     		// 本来没有json，用的人多了也就成了json
	     		dataType:"json",
	     		// 可以看返回data的内容
	     		success:function(data){
	     			console.log(data);
	     			refreshNews();
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
    		url:'/admin/curnews',
    		type:'get',   	
    		datatype:'json',
    		data:{newsid:updateId},
    		success:function(data){
    			console.log(data);
    			
    			$("#unewstitle").val(data[0].newstitle);
    			$("#unewstype").val(data[0].newstype);
    			$("#unewsimg").val(data[0].newsimg);
    			$("#unewssrc").val(data[0].newssrc);
    			// 分解成字符串数组,取做左半边的部分
                var utime = data[0].newstime.split('T')[0];
    			$("#unewstime").val(utime);

    		}
    	});
    });
    $("#updateModal #confirmUpdate").click(function(){
    	// 更新数据
    	$.ajax({
            url:'/admin/update',
            type:'post',
            data:{
            	newstitle:$('#unewstitle').val(),
            	newstype:$('#unewstype').val(),
            	newsimg:$('#unewsimg').val(),
            	newstime:$('#unewstime').val(),
            	newssrc:$('#unewssrc').val(),
                 _csrf:$("#_csrf").val(),//token值用于判断是否是本机发送的请求。
            	id:updateId
            },
            success:function(data){
            	$("#updateModal").modal('hide');
            	console.log(data);
            	refreshNews();
            }
    	});

    });
// 修改数据end
    // 刷新函数
    function refreshNews() {
        // newsTable 是局部变量
        $newsTable.empty();
        // 开ajax
        $.ajax({
            type: 'get',
            url: '/admin/getnews',
            datatype: 'json',
            success: function(data) {
                data.forEach(function(item, index, array) {
                    var $tdid = $("<td>").html(item.id);
                    var $tdtype = $("<td>").html(item.newstype);
                    var $tdtitle = $("<td>").html(item.newstitle);
                    var $tdimg = $("<td>").html(item.newsimg);
                    var $tdsrc = $("<td>").html(item.newssrc);
                    var $tdtime = $("<td>").html(item.newstime);
                    var $tdctrl = $("<td>");
                    var $btnupdate = $("<button>").addClass("btn btn-primary btn-xs").html("修改");
                    var $btndelete = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $("<tr>");
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
                    // 添加到头部
                    $newsTable.prepend($tRow);
                })
            }
        })
    }
});
