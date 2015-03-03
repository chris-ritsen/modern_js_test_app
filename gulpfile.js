
"use strict";

// let jshint = require("gulp-jshint");
// let sass = require("gulp-sass");

let batch = require("gulp-batch");
let eslint = require("gulp-eslint");
let gulp = require("gulp");
let minifyCss = require("gulp-minify-css");
let plumber = require("gulp-plumber");
let rename = require("gulp-rename");
let shell = require("gulp-shell");
let watch = require("gulp-watch");

gulp.task("test", shell.task("xclip -o"));

/*
gulp.task("sass", function() {
  return gulp.src("./scss/main.scss")
    .pipe(watch("scss/*.scss"))
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("./www"))
});
*/

gulp.task("watch", function() {
  // watch("**/*.scss", batch(function() {
    // gulp.start("sass");
  // }));
});

gulp.task("lint", function() {
  gulp.src("app.js")
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

/*
gulp.task("sass-old", function(done) {
  gulp.src("scss/main.scss")
  .pipe(sass())
  .pipe(gulp.dest("./www/css/"))
  .pipe(minifyCss({
    "keepSpectialComments": 0
  }))
  .pipe(rename({
    "extname": ".min.css"
  }))
  .pipe(gulp.dest("./www/css/"))
  .on("end", done);
});
*/

