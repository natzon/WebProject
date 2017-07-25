<?php
   // 设置报头，及连接数据库
   header("Content-type: application/json; charset=utf-8");
   // 服务器名字 用户名 用户密码 数据库名字 端口号
   // 服务器连接数据库
   // require_once只导入一次
   require_once('db.php');
   // 如果连接成功
   if($link){
   	// 插入新闻,post过来的数据会放在$_POST[]里面
   	$newstitle = $_POST['newstitle'];
   	$newstype = $_POST['newstype'];
   	$newsimg = $_POST['newsimg'];
   	$newstime = $_POST['newstime'];
   	$newssrc = $_POST['newssrc'];
  
   	// 设置查询语句
   	$sql = "INSERT INTO  `news`(`newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";

    // 	 // 设置一下相关字体,这样就不会有乱码
    //    mysqli_query($link,"SET NAMES 'UTF8'");
     	 // // mysqli_query() 函数执行一条 MySQL 查询。
       // $result=mysqli_query($link,$sql);
      // INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES ('', '精选', '测试2', '../baidunew/img/news2.jepg', '2017-06-06 00:00:00', 'laoda')
      // $sql = "INSERT INTO `news`(`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES('1', '精选', '测试2', '../baidunew/img/news2.jepg', '2017-06-06 00:00:00', 'laoda')";
      mysqli_query($link,"SET NAMES 'UTF8'");
      $result=mysqli_query($link,$sql);
       if($result){
         echo json_encode(array("sucess"=>'ok'));
       }else{
         echo json_encode(array("sucess"=>'caonima'));
       }
       

      
   	

   }else{
   	echo json_encode(array("sucess"=>"fuck"));
   }

?>