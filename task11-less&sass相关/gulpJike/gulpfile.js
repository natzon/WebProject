var gulp = require('gulp'),
	less = require('gulp-less'),
	spritesmith = require('gulp.spritesmith');


gulp.task('default',['testLess','sprite'],function() {
  // 将你的默认的任务代码放在这
 
});
gulp.task('testLess', function () {
    gulp.src('./src/less/geek.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});


gulp.task('sprite',function(){  
     gulp.src('src/images/*.png')  
        .pipe(spritesmith({  
            imgName:'sprite-partner.png',  
            cssName:'css/sprit-partner.css',  
            padding:30,
            algorithm:'top-down'  
        }))  
        .pipe(gulp.dest('dist/'))  
          
})  