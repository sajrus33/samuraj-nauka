// let browserSync = require("browser-sync");
// let sass = require("gulp-sass");
// let sourceMaps = require("gulp-sourcemaps");
// let autoprefixer = require("gulp-autoprefixer");
// let cleanCSS = require("gulp-clean-css");
// let uglify = require("gulp-uglify");
let gulp = require("gulp");
let concat = require("gulp-concat");
let cleanCSS = require("gulp-clean-css");

gulp.task("css", function () {
    return gulp.src(['./css/header.css', './css/products.css', './css/products3.css', './css/weDo.css', './css/about.css', "./css/footer.css", "./css/extra.css"])
        .pipe(concat("index.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./css/"));
});