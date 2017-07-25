var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./db');
var connection = mysql.createPool(db);

/* 后台路由页面 */
// 获取所有新闻列表
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT *FROM `news`', function(err, rows) {
    	res.json(rows);
    })
});
// 确认更新
router.post('/update',function(req,res){
	var newsid = req.body.id,
	    newstitle = req.body.newstitle,
	    newstype = req.body.newstype,
	    newsimg = req.body.newsimg,
	    newstime = req.body.newstime,
	    newssrc = req.body.newssrc;
	connection.query('UPDATE `news` SET `newstitle` = ?,`newstype`=?,`newsimg` = ? ,`newstime` =? , `newssrc` = ? WHERE `id` = ?' ,
		[newstitle, newstype,newsimg,newstime,newssrc,newsid],function(err,rows){
			console.log(rows.changeRows);
			var str ={'gengxin':"chenggong"}
			res.json(str);
	});
});

// 模态框取值
router.get('/curnews',function(req,res){
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE `id` = ?',[newsid],function(err,rows){
		res.json(rows);
	});
});

// 删除
router.post('/delete',function(req,res){
	var newsid = req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `id` = ?',[newsid],function(err,rows){
		// console.log(result.affectedRows);
		console.log('dsa');
		var str = {'shanchu':"chenggong"}
		res.json(str);
	});
	
});

// 插入
router.post('/insert',function(req,res){
  
	var newstitle = req.body.newstitle,
	    newstype = req.body.newstype,
	    newsimg = req.body.newsimg,
	    newstime = req.body.newstime,
	    newssrc = req.body.newssrc;
	connection.query('INSERT INTO  `news`(`newstype`,`newstitle`,`newsimg`,`newstime`,`newssrc`)VALUES(?,?,?,?,?)',
		[newstype,newstitle,newsimg,newstime,newssrc],function(err,result){
			if(!err){
				console.log(result.insertId);
				var str = {'charu':"chenggong"}
				res.json(str);
			}
		});
});
module.exports = router;
