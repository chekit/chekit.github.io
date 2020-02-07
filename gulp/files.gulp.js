'use strict';

import gulp from 'gulp';

gulp.task('files', () => {
	return gulp.src(`./src/files/**/*.*`)
		.pipe(gulp.dest('./dist/files/'));
})