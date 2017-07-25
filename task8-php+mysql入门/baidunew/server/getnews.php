<?php
// 设置响应的类型为jason类型
   header("Content-type: application/json; charset=utf-8");
   // 一个数组用来放数据
   // 服务器名字 用户名 用户密码 数据库名字 端口号
   // 服务器连接数据库
   require_once("db.php");
   // if ($link) {
   //    if ($_GET['newstype') {
   //        $newstype = $_GET['newstype'];
   //        $sql = "SELECT * FROM news WHERE `newstype` = '{$newstype}'";
   //    }else{
   //        $sql = "SELECT * FROM news";
   //        // mysqli_query() 函数执行一条 MySQL 查询。
   //        mysqli_query($link,"SET NAMES 'UTF8'");
   //        $result = mysqli_query($link,$sql);
   //        $senddata = array();
   //         // 输出到前端,mysql_fetch_assoc() 函数从结果集中取得一行作为关联数组。



   //    }

   //       // if ($_GET['newstype']) {
   //       //     $newstype = $_GET['newstype'];
   //       //     $sql = "SELECT * FROM news WHERE `newstype` = '{$newstype}'";
         
   //       //    mysqli_query($link,"SET NAMES 'UTF8'");
   //       //    // mysqli_query() 函数执行一条 MySQL 查询。
   //       //    $result = mysqli_query($link,$sql);

   //       //    $senddata = array();
   //       //    // 输出到前端,mysql_fetch_assoc() 函数从结果集中取得一行作为关联数组。
   //       //    while ($row = mysqli_fetch_assoc($result)){
   //       //       // 存数据
   //       //           array_push($senddata, array(
   //       //                                        'id'=>$row['id'],
   //       //                                        'newstype'=>$row['newstype'],
   //       //                                        'newstitle'=>$row['newstitle'],
   //       //                                        'newsimg'=>$row['newsimg'],
   //       //                                        'newstime'=>$row['newstime'],
   //       //                                        'newssrc'=>$row['newssrc']


   //       //             ));

   //       //    }
   //       //       // 传承数组的数组了
   //       //        // echo json_encode(array($senddata));
   //       //     echo json_encode($senddata);
         
   //          # code...
   //  // }else{
   //         $sql = "SELECT * FROM news";
   //          // 设置一下相关字体,这样就不会有乱码
   //          mysqli_query($link,"SET NAMES 'UTF8'");
   //          // mysqli_query() 函数执行一条 MySQL 查询。
   //          $result = mysqli_query($link,$sql);
   //          $senddata = array();
   //          // 输出到前端,mysql_fetch_assoc() 函数从结果集中取得一行作为关联数组。
   //          while ($row = mysqli_fetch_assoc($result)){
   //             // 存数据
   //                 array_push($senddata, array(
   //                                              'id'=>$row['id'],
   //                                              'newstype'=>$row['newstype'],
   //                                              'newstitle'=>$row['newstitle'],
   //                                              'newsimg'=>$row['newsimg'],
   //                                              'newstime'=>$row['newstime'],
   //                                              'newssrc'=>$row['newssrc']


   //                   ));

   //          }
   //             // 传承数组的数组了
   //              // echo json_encode(array($senddata));
   //           echo json_encode($senddata);
            
   //     // }
   // 	   //执行成功的过程 
   // 	   // 查询语句,先查询news这个表

   	 
   // }else{
   // 	   echo json_encode(array("success"=>"none"));
   // }
   // mysqli_close($link);
  
   if ($link) {

      if ($_GET['newstype']) {
        $newstype = $_GET['newstype'];
        $sql = "SELECT * FROM news WHERE `newstype` = '{$newstype}'";
         
            mysqli_query($link,"SET NAMES 'UTF8'");
            // mysqli_query() 函数执行一条 MySQL 查询。
            $result = mysqli_query($link,$sql);

            $senddata = array();
            // 输出到前端,mysql_fetch_assoc() 函数从结果集中取得一行作为关联数组。
            while ($row = mysqli_fetch_assoc($result)){
               // 存数据
                   array_push($senddata, array(
                                                'id'=>$row['id'],
                                                'newstype'=>$row['newstype'],
                                                'newstitle'=>$row['newstitle'],
                                                'newsimg'=>$row['newsimg'],
                                                'newstime'=>$row['newstime'],
                                                'newssrc'=>$row['newssrc']


                     ));

            }
               // 传承数组的数组了
                // echo json_encode(array($senddata));
             echo json_encode($senddata);
        
      }else{
            $sql = "SELECT * FROM news";
            // 设置一下相关字体,这样就不会有乱码
            mysqli_query($link,"SET NAMES 'UTF8'");
            // mysqli_query() 函数执行一条 MySQL 查询。
            $result = mysqli_query($link,$sql);
            $senddata = array();
            // 输出到前端,mysql_fetch_assoc() 函数从结果集中取得一行作为关联数组。
            while ($row = mysqli_fetch_assoc($result)){
               // 存数据
                   array_push($senddata, array(
                                                'id'=>$row['id'],
                                                'newstype'=>$row['newstype'],
                                                'newstitle'=>$row['newstitle'],
                                                'newsimg'=>$row['newsimg'],
                                                'newstime'=>$row['newstime'],
                                                'newssrc'=>$row['newssrc']
                     ));

            }
               // 传承数组的数组了
                // echo json_encode(array($senddata));
             echo json_encode($senddata);
      }
   }else{
      echo json_encode(array("连接数据库"=>"失败"));
   }
   
      
       
   
?>