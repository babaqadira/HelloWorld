var gulp = require("gulp");
var sass = require('gulp-sass');

gulp.task("sass", function () {
    return gulp.src('./styles/main.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./styles/"));
});
