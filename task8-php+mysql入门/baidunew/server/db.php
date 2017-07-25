<?php
    // 专门设置爱个文件来连接数据库，那么以后要改端口就会方便的多

    header("Content-type: application/json; charset=utf-8");
     $link = mysqli_connect("localhost","hard","123","baidunews",3306);
?>