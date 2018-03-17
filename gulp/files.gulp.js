'use strict';

import gulp  from 'gulp';
import cache from 'gulp-cache';

gulp.task('files', () => {
	return gulp.src(`./src/files/**/*.*`)
		.pipe(gulp.dest('./dist/files/'));
})