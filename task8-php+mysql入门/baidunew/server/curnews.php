<?php
    header("Content-type: application/json; charset=utf-8");
     require_once("db.php");
     if($link){
      $newsid = $_GET['newsid'];
      $sql = "SELECT * FROM `news` WHERE `id` = {$newsid}";
      mysqli_query($link,"SET NAMES utf8");
      $result = mysqli_query($link,$sql);
      if($result){
        $senddata = array();
        
            // 传承数组的数组了
             // echo json_encode(array($senddata));
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
          echo json_encode($senddata);
      }

      
     }
?>