var gulp = require('gulp'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tscConfig = require('./tsconfig.json');

var appSrc = '.',
    tsSrc = 'app';

gulp.task('sass', function () {
    return gulp.src(tsSrc + '/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(tsSrc + '/css/'));
});

gulp.task('typescript', function () {
    return gulp
        .src(tsSrc + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
    gulp.watch(tsSrc + '**/*.ts', ['typescript']);
    gulp.watch(tsSrc + '/sass/style.scss', ['sass']);
});

gulp.task('webserver', function() {
    gulp.src(appSrc)
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['typescript', 'watch', 'sass', 'webserver']);//'copylibs',
