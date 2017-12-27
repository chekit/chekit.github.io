'use strict';

import gulp  from 'gulp';

gulp.task('images', () => {
	return gulp.src(`./src/images/**/*.{png,jpg,svg,ico}`)
		.pipe(cache(imagemin({ 
			optimizationLevel: 3, 
			progressive: true, 
			interlaced: true 
		})))
		.pipe(gulp.dest('./dist/images/'));
})