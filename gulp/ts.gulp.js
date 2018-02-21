'use strict';

import gulp from 'gulp';

import ts from 'gulp-typescript';
import tsify from 'tsify';

import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

gulp.task('libs', () => {
	return gulp.src(`./src/libs/**/*.js`)
		.pipe(gulp.dest(`dist/js/libs/`));
})

gulp.task('ts', function () {
	const bundler = browserify({
        basedir: '.',
        debug: true,
        entries: ['src/ts/index.ts'],
        cache: {},
        packageCache: {}
	});
	bundler
		.plugin(tsify, {target: 'es6'})
		.transform(babelify.configure({extensions: [".ts",".js"]}));

	return bundler.bundle()
		.on('error', err => console.error(err))
		.pipe(source('scripts.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		// .pipe(sourcemaps.init({loadMaps: true}))
		// .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/js'));
});

