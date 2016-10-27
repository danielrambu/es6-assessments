var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
    var error = false;
    gulp.src('./test/*.js').pipe(mocha()).on('error', function (err) {
        console.log(err.message);
        error = true;
    }).on('end', function () {
        if (!error) {
            console.log('Tests succeeded!');
            process.exit(0);
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['./test/*.js'], ['test']);
});