
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

gulp.task("scss", function() {
  shell.task("make scss");
})

gulp.task("watch", function() {

  gulp.watch("scss/**.scss", [ "scss" ]);

})

gulp.task("lint", function() {
  gulp.src("gulpfile.js")
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task("default", [
  "lint",
  "scss",
  // "watch"
]);

