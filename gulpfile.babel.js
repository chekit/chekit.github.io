'use strict';

import gulp from 'gulp';
import sequence from 'gulp-sequence';
import requireDir from 'require-dir';

requireDir('./gulp');

gulp.task('default', sequence(['clean', 'clear'], ['fonts', 'sass'], 'pug', 'images', 'libs', 'ts', 'files'));

gulp.task('dev', sequence('default', 'server', 'watch'));