const gulp = require('gulp');
const del = require('del');
const workboxBuild = require('workbox-build');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

// Clean "build" directory
const clean = () => {
  return del(['build/*'], {dot: true});
};
gulp.task('clean', clean);

// Copy "src" directory to "build" directory
const copyBaseAssets = () => {
  return gulp.src(['src/*.*'])
    .pipe(gulp.dest('build'));
};
gulp.task('copyBaseAssets', copyBaseAssets);

const copyImages = () => {
  return gulp.src(['src/images/**/*.*'])
    .pipe(gulp.dest('build/images'));
};
gulp.task('copyImages', copyImages);

const copyStyles = () => {
  return gulp.src(['src/style/**/*.*'])
    .pipe(gulp.dest('build/style'));
};
gulp.task('copyStyles', copyStyles);

// ts to js
const tsTojs = () => {
  let tsResult = tsProject.src()
      .pipe(tsProject());

    return tsResult.js
    .pipe(gulp.dest(tsProject.options.outDir));
};
gulp.task('tsTojs', tsTojs);

// "service worker" task here
// Inject precache manifest
const injectManifest = () => {
  return workboxBuild.injectManifest({
    swSrc: 'build/scripts/sw.js',
    swDest: 'build/swInjectManifest.js',
    globDirectory: 'build',
    globPatterns: [
      'index.html',
      'manifest.webmanifest',
      'scripts/index.js',
      'images/**/*.*',
      'style/main.css'
    ]
  }).then(resources => {
    console.log(`Injected ${resources.count} resources for precaching, ` +
        `totaling ${resources.size} bytes.`);
  }).catch(err => {
    console.log('Uh oh 😬', err);
  });
}
gulp.task('injectManifest', injectManifest);

// remove original sw file
const removeSWFile = () => {
  return del(['build/scripts/sw.js'], {dot: true});
};
gulp.task('removeSWFile', removeSWFile);

// This is the app's build process
const build = gulp.series(
  'clean', 
  'copyBaseAssets',
  'copyImages', 
  'copyStyles', 
  'tsTojs', 
  'injectManifest',
  'removeSWFile'
  );
gulp.task('build', build);

// Watch our "app" files & rebuild whenever they change
const watch = () => {
  gulp.watch('src/**/*', build);
};
gulp.task('watch', watch);

// Set the default task to "build"
gulp.task('default', build);
