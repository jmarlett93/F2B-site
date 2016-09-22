const gulp = require('gulp');
const webserver = require('gulp-webserver');
const browserify  = require('browserify');
const babelify    = require('babelify');
const source      = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const uglifycss = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            port: 8000,
            livereload: true,
            directoryListing: true,
            open: true,
            fallback: 'we-buy-houses-for-cash-austin.html',
        }));
});

gulp.task('pack-js', function(){
    return browserify({entries: 'js/main.js', debug: true})
        .transform("babelify", {presets: ["es2015"] })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('pack-css', function(){
    return gulp.src(['css/main.css', 'css/cp-style.css'])
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments":true
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('pack-html', function(){
    return gulp.src('index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('pack-images', function(){
    return gulp.src('css/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/css/images'));
});

gulp.task('pack-html2', function(){
    return gulp.src('contact/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/contact'));
});

gulp.task('prodbuild', ['pack-js', 'pack-css', 'pack-html', 'pack-html2', 'pack-images']);