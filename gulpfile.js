var gulp = require('gulp'),
    browsersync = require('browser-sync');

gulp.task('browsersync', function() {
    browsersync({
        server: {
            baseDir: 'app'
        },
    });
});

gulp.task('watch', ['browsersync'], function() {
    gulp.watch('app/*.html', browsersync.reload);
    gulp.watch('app/*.css', browsersync.reload);
    gulp.watch('app/*.js', browsersync.reload);
});

gulp.task('default', ['watch']);
