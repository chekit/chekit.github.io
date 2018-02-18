'use strict';

import gulp        from 'gulp';
import watch       from 'gulp-watch';
import sequence    from 'gulp-sequence';
import browserSync from 'browser-sync';

let localhost = browserSync.create();

gulp.task('watch', function () {
  	watch(`./src/sass/**/*.scss`, function () {
		setTimeout(function () {
			return sequence('sass')(function (err) {
				if (err) console.log(err)
			});
		}, 300);
	});

	watch(`./src/**/*.pug`, function () {
		return sequence('pug')(function (err) {
			if (err) console.log(err)
		});
	}).on('ready', localhost.reload);

	watch(`./src/images/**/*.{png,jpg,svg,ico}`, function (cb) {
		return sequence('images')(function (err) {
			if (err) console.log(err)
		});
	}).on('ready', localhost.reload);

	watch(`./src/**/*.ts`, function () {
		return sequence('ts')(function (err) {
			if (err) console.log(err)
		});
	}).on('ready', localhost.reload);
});

