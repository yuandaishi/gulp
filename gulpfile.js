//入口文件，名称必须是gulpfile.js，但是packjson里面的main是index.js也可以执行，不知道具体是为什么
var gulp = require('gulp');//引入模块，即插件，使用babel之后，好像可以使用import，import会被label编译成require
var base64 = require("gulp-img64");
var imgmin = require("gulp-imagemin");
var miniCss = require('gulp-minify-css');
var miniJs = require('gulp-uglify');
var miniHtml = require('gulp-minify-html');
var concatFile = require('gulp-concat');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log("hahha")
});
gulp.task('base64',function(){//第一个参数应该是可以随意取名
  return gulp.src('img/128.jpg"') //获取该任务需要的文件
      .pipe( base64());             //该任务调用的模块
      //.pipe( gulp.dest('src/css') );   //将在 src/css 文件夹中生产test.css
});
gulp.task('imgmin',function(){//第一个参数应该是可以随意取名
  return gulp.src('img/128.jpg') //获取该任务需要的文件
      .pipe(imgmin())            //该任务调用的模块
      .pipe(gulp.dest('imgmin'));   //将在 src/css 文件夹中生产test.css
});
gulp.task('miniCssA',function(){//miniCssA是命令行工具中执行的方法名，不过最好使用和对应模块一致的名字，好记
	return gulp.src('demo_1/css/style.css')
				.pipe(miniCss())
				.pipe(gulp.dest('demo_1/css'));
})	
gulp.task("miniHtml",function(){
	return gulp.src('demo_1/cssMin.html')
				.pipe(miniHtml())
				.pipe(gulp.dest('demo_1'));
})
gulp.task('concatFile',function(){
	return gulp.src('demo_1/js/*.js')
				.pipe(concatFile('all.js'))//合并的文件名为all.js
				.pipe(gulp.dest('demo_1/js'))//合并之后的路劲
})
