// let browserSync = require("browser-sync");
// let sass = require("gulp-sass");
// let sourceMaps = require("gulp-sourcemaps");
// let autoprefixer = require("gulp-autoprefixer");
// let cleanCSS = require("gulp-clean-css");
// let uglify = require("gulp-uglify");
const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");

gulp.task("css", function () {
    return gulp.src(['./css/start.css', './css/header.css', './css/mainAll.css', './css/about.css', './css/skills.css', './css/progress.css', "./css/projects.css", "./css/footer.css", "./css/extra.css"])
        .pipe(concat("index.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./css/"));
});