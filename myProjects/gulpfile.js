const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const watch = require("gulp-watch");

gulp.task("css-portfolio", () => {
    return gulp.src(['./website portfolio/css/start.css', './website portfolio/css/header.css', './website portfolio/css/mainAll.css', './website portfolio/css/about.css', './website portfolio/css/skills.css', './website portfolio/css/progress.css', "./website portfolio/css/projects.css", "./website portfolio/css/footer.css", "./website portfolio/css/extra.css"])
        .pipe(concat("index.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./website portfolio/css/"));
});
gulp.task("watch-portfolio", function () {
    watch(["./website portfolio/css/*.css"], () => {
        return gulp.src(['./website portfolio/css/start.css', './website portfolio/css/header.css', './website portfolio/css/mainAll.css', './website portfolio/css/about.css', './website portfolio/css/skills.css', './website portfolio/css/progress.css', "./website portfolio/css/projects.css", "./website portfolio/css/footer.css", "./website portfolio/css/extra.css"])
            .pipe(concat("index.css"))
            .pipe(cleanCSS())
            .pipe(gulp.dest("./website portfolio/css2/"));
    });
});
gulp.task("watch-portfolio", function () {
    watch(["./website portfolio/css/*.css"], () => {
        return gulp.src(['./website portfolio/css/start.css', './website portfolio/css/header.css', './website portfolio/css/mainAll.css', './website portfolio/css/about.css', './website portfolio/css/skills.css', './website portfolio/css/progress.css', "./website portfolio/css/projects.css", "./website portfolio/css/footer.css", "./website portfolio/css/extra.css"])
            .pipe(concat("index.css"))
            .pipe(cleanCSS())
            .pipe(gulp.dest("./website portfolio/css2/"));
    });
});

// gulp.task("watch", ["css-portfolio"], () => {
//     gulp.watch();
// });