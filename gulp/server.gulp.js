'use strict';

import gulp        from 'gulp';
import browserSync from 'browser-sync';

const localhost = browserSync.create();

let files = [
	`./dist/css/**/*.css`,
	`./dist/images/**/*.{jpg,png,svg,json}`,
	`./dist/**/*.html`,
	`./dist/js/**/*.js`
];

gulp.task('server', () => {
	localhost.init({
		startPath: `/`,
		server: {
			baseDir: `./dist/`
		},
		files: files
	});
})