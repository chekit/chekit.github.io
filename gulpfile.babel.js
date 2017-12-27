'use strict';

import gulp from 'gulp';
import sequence from 'gulp-sequence';
import requireDir from 'require-dir';

requireDir('./gulp');

gulp.task('default', sequence(['clean', 'clear'], 'sass', 'pug', 'images'));

gulp.task('dev', sequence('default'));