'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('compile', function () {
	return gulp.src('./../styles/*.scss')
		.pipe(sass.sync())
		.pipe(autoprefixer({
			browsers: ['ie > 9', 'last 2 versions'],
			cascade: false
		}))
		.pipe(cssmin())
		// .pipe(rename('index.css'))
		.pipe(gulp.dest('./../kfront-baseui/css'));
});

gulp.task('copyfont', function () {
	return gulp.src('./../styles/fonts/**')
		.pipe(cssmin())
		.pipe(gulp.dest('./../kfront-baseui/css/fonts'));
});

gulp.task('default', ['copyfont', 'compile']);
