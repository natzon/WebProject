var gulp = require('gulp'),
less = require('gulp-less'),
spritesmith=require('gulp.spritesmith');  

gulp.task('default',['less','sprite'],function(){
	
});


gulp.task('less',function(){
	gulp.src('./less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task('sprite',function(){  
     gulp.src('./img/*.png')  
        .pipe(spritesmith({  
            imgName:'sprite.png',  
            cssName:'css/sprite.css',  
            padding:5,  
            algorithm:'top-down'  
        }))  
        .pipe(gulp.dest('dist/img'))  
});
