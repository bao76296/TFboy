const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');

// 全局配置
const config = require('./config');

const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
const gulpSequence = require('gulp-sequence');

const {webpack_config} = config;

// 输出html页面
gulp.task('copy:html',() => {
    return gulp.src(['./dist/rev/**/*.json','./src/**/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./dist'));
})

// 输出静态页面
gulp.task('copy:static',() => {
    return gulp.src('./src/static/**/*.*')
        .pipe(gulp.dest('./dist/static'));
})

// 处理sass文件
gulp.task('compile:scss',() => {
    return gulp.src('./src/css/*.scss')
        .pipe(sass({
            outputStyle : 'compressed'
        }).on('error',sass.logError))
        .pipe(rev())
        .pipe(gulp.dest('./dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/css'))
})

//打包js
gulp.task('compile:js',() => {
    return gulp.src('./src/js/**/*.js')
        .pipe(webpack(webpack_config))
        .pipe(rev())
        .pipe(gulp.dest('./dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/js'))
        
})


// 执行默认任务
gulp.task('default',function(cb){
     gulpSequence(['copy:static',  'compile:scss', 'compile:js'], 'copy:html')(cb)
})