const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const sass = gulpSass(require('sass'))
gulp.task ('sass' , function () {
    gulp.src('src/Components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
})