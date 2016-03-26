var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css'),
    concatJs = require('gulp-concat'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify');

gulp.task('compress', function ()
{
  gulp.src('./public/css/*.css')
    .pipe(concatCss("all.css"))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('./public/min/'))
    .pipe(notify("Ha finalizado la task css!"));

  gulp.src('./public/js/*.js')
    .pipe(concatJs('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/min/'))
    .pipe(notify("Ha finalizado la task js!"));
});

