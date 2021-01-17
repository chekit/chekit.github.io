import gulp from 'gulp';

gulp.task('files:copy', () => {
    return gulp.src('./src/files/**/*.pdf')
        .pipe(gulp.dest('./dist/files'));
})