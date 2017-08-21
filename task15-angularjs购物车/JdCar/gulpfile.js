var gulp = require('gulp');
less = require('gulp-less');
 
gulp.task('default',['testLess'],function() {
  // 将你的默认的任务代码放在这
  console.log("asa");
 
});
gulp.task('testLess', function () {
    gulp.src('./src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});