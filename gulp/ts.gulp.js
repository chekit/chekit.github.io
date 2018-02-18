'use strict';

import gulp from 'gulp';
import ts from 'gulp-typescript';
import uglify from 'gulp-uglify';
import rename from "gulp-rename";

gulp.task('ts', function () {
	var tsResult = gulp.src("src/ts/**/*.ts")
		.pipe(ts({
			  noImplicitAny: true,
			  out: "scripts.js"
		}));

		return tsResult.js
			.pipe(uglify())
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest("dist/js"));
});

