import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import gulpSourcemaps from "gulp-sourcemaps";

const {init, write} = gulpSourcemaps;

import GulpCleanCss from "gulp-clean-css";

const sass = gulpSass(dartSass);

export const scss = () => {
    return (
        app.gulp
            .src(app.path.src.scss)
            // Comment/uncomment for production/development
            .pipe(init())
            .pipe(sass({outputStyle: "expanded"}))
            .pipe(app.plugins.replace(/@img\//g, "../assets/images/"))
            .pipe(app.plugins.replace(/@media\//g, "../assets/media/"))
            .pipe(app.plugins.replace(/@fonts\//g, "../assets/fonts/"))
            .pipe(
                app.plugins.replace(/@svgSprite/g, "../assets/svgicons/icons/icons.svg")
            )
            .pipe(
                autoPrefixer({overrideBrowserslist: ["last 10 versions"], grid: true})
            )
            .pipe(GulpCleanCss())
            .pipe(app.plugins.rename({extname: ".min.css"}))
            // Comment/uncomment for production/development
            .pipe(write("."))
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.browserSync.stream())
    );
};
