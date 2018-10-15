const gulp = require('gulp');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');
const webpack = require('webpack-stream');
const watch = require('gulp-watch');

const config = require('./config')
const {server_config, webpack_config} = config;

gulp.task('webserver',() =>{
    gulp.src('./dist')
        .pipe(webserver(server_config));
        
})

gulp.task('copy:html',() => {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
})

gulp.task('copy:static',() => {
    gulp.src('./src/static/**/*.*')
        .pipe(gulp.dest('./dist/static'));
})

gulp.task('copy:scss',() => {
    gulp.src('./src/**/*.scss')
        .pipe(sass({
            outputStyle : 'compressed'
        }).on('error',sass.logError))
        // .pipe(gulp.dest('./src'))
        .pipe(gulp.dest('./dist'));
})

//打包js
gulp.task('compile:js',() => {
    gulp.src('./src/js/**/*.js')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('./dist/js'));
})

gulp.task('watch',() => {
    gulp.watch('./src/**/*.html',['copy:html']);
    gulp.watch('./src/js/**/*',['compile:js']);
    gulp.watch('./src/**/*.scss',['copy:scss']);

    watch('src/static',() => {
        gulp.start(['copy:static']);
    })
   
})

gulp.task('default',['copy:static','compile:js','copy:scss','copy:html','webserver','watch'],() => {
    
})