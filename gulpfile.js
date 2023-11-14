const { src, dest, series, parallel, watch } = require("gulp");
const del = require("del");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("node-sass"));
const sourcemaps = require("gulp-sourcemaps");

const fs = require("fs/promises");
const connect = require("gulp-connect-php");
const browserSync = require("browser-sync").create();

const paths = {
  build: "build",
  template: "src/template",
  pages: "src/pages/**/*.pug",
  styles: "src/styles/**/*",
  libraries: "src/libraries/**/*",
  scripts: "src/scripts/**/*",
  other: ["src/**/*", "!src/**/*.pug", "!src/styles/**/*", "!src/scripts/**/*"],
};

let init = () => fs.rmdir(paths.build, { recursive: true });

let pages = async () =>
  src(paths.pages)
    .pipe(pug({ basedir: paths.template, locals: { time: +new Date() } }))
    .pipe(dest(paths.build));

let styles = () =>
  src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(dest(paths.build + "/styles"));

let libraries = () => src(paths.libraries).pipe(dest(paths.build + "/libraries"));
let scripts = () => src(paths.scripts).pipe(dest(paths.build + "/scripts"));

let other = () => src(paths.other).pipe(dest(paths.build));
let clean = () => del(paths.build);

let reload = (cb) => (browserSync.reload(), cb());

let watcher = () => {
  watch([paths.template, paths.pages], series(pages, reload));
  watch(paths.styles, series(styles, reload));
  watch(paths.libraries, series(libraries, reload));
  watch(paths.scripts, series(scripts, reload));
  watch(paths.other, series(other, reload));
};

let server = () => {
  connect.closeServer();
  connect.server({
    base: "build",
    keepalive: true,
    port: 3000,
  });
  browserSync.init({ proxy: "localhost:3000", port: "8080", watch: true, notify: false });
};

let build = series(clean, parallel(pages, styles, libraries, scripts, other));
let start = parallel(watcher, server);

exports.default = series(init, build, start);
