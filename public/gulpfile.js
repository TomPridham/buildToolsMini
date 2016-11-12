"use strict";

//to build for development: gulp --env=development run
//to build for production: gulp --env=production run


const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const annotate = require("gulp-ng-annotate");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const htmlMin = require("gulp-htmlmin");
const uglyCss = require("gulp-uglifycss");
const gutil = require("gulp-util");

//standard file tasks
gulp.task("js", () => {
    return gulp.src(["./node_modules/angular/angular.js", "./node_modules/angular-ui-router/release/angular-ui-router.js", "./index.js","./js/**/*.js"])
        .pipe(babel(
            {presets: ["es2015"]}))
        .pipe(concat("all.js"))
        .pipe(annotate({add: true}))
        .pipe(gutil.env.env === "production" ? minify() : gutil.noop())
        .pipe(rename("all.min.js"))
        .pipe(gutil.env.env === "production" ? uglify({mangle: false}) : gutil.noop())
        .pipe(gulp.dest("../dist/js"));
});

gulp.task("css", () => {
    return gulp.src("./css/*.css")
        .pipe(concat('all.min.css'))
        .pipe(uglyCss())
        .pipe(gulp.dest("../dist/css"));
});

//copies templates removes whitespace
gulp.task("views", () => {
    return gulp.src("./templates/**/*.html")
        .pipe(htmlMin(
            {
                collapseWhitespace: true,
                removeComments: true
            }
        ))
        .pipe(gulp.dest("../dist/templates"))
});

//copies index and removes whitespace to save space
gulp.task("index", () => {
    return gulp.src("./index.html")
        .pipe(htmlMin(
            {
                collapseWhitespace: true,
                removeComments: true
            }
        ))
        .pipe(gulp.dest("../dist/"))
});

//copies images over to ../dist
gulp.task("images", () => {
    return gulp.src("./img/**/*.png")
        .pipe(gulp.dest("../dist/img"));
});


//dev and deploy tasks
gulp.task("run", ["js", "css", "views", "index", "images"], (next) => {
    return next();
});

gulp.task('watch', () => {
    gulp.watch(
        ['./js/**/*.js', './css/*.css', './templates/*.html'],
        ["js", "css", "views"])
});