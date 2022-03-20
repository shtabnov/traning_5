const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

module.exports = function scripts () {
    return gulp.src('src/scripts/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build/scripts'))
  };