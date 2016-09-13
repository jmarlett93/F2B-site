var gulp = require('gulp');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

var paths = {
    scripts: ['js/.js'],
    styling: ['css/*.css']
};

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            port: 8000,
            livereload: true,
            directoryListing: true,
            open: true,
            fallback: 'index.html',
        }));
});

gulp.task('pack-js', function(){
    return gulp.src([ 'js/main.js'])
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

gulp.task('prodbuild', [ 'pack-css', 'pack-html', 'pack-html2', 'pack-images']);