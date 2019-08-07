const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const ts = require('gulp-typescript');
const insert = require('gulp-insert');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

// typescript 配置
const tsConfig = path.resolve(__dirname, '../tsconfig.json');
// 校验是否生产环境
const isProduction = process.env.NODE_ENV === 'production';
// 源码路径
const src = path.join(__dirname, '../src');
// 转换成es5
const libDir = path.resolve(__dirname, '../lib');
// 转换成es6
const esDir = path.resolve(__dirname, '../dist');

const libConfig = {
  target: 'es5',
  lib: ['es2015', 'es2017', 'dom'],
  module: 'commonjs',
  declaration: false
};

const compileLess = dist => () =>
  gulp
    .src(`${src}/**/*.less`)
    .pipe(less())
    .pipe(postcss())
    .pipe(
      insert.transform((contents, file) => {
        if (!file.path.includes('src' + path.sep + 'common')) {
          contents = `@import '../common/index.wxss';` + contents;
        }
        return contents;
      })
    )
    .pipe(
      rename(path => {
        path.extname = '.wxss';
      })
    )
    .pipe(gulp.dest(dist));

const compileTs = (dist, config) => () => {
  const tsProject = ts.createProject(tsConfig, config);
  return tsProject
    .src()
    .pipe(tsProject())
    .on('error', () => {})
    .pipe(gulp.dest(dist));
};

const copy = (dist, ext) => () =>
  gulp.src(`${src}/**/*.${ext}`).pipe(gulp.dest(dist));

const compile = (dist, config) =>
  gulp.parallel(
    compileTs(dist, config),
    compileLess(dist),
    copy(dist, 'wxml'),
    copy(dist, 'wxs'),
    copy(dist, 'json')
  );

if (isProduction) {
  gulp.series(compile(esDir), compile(libDir, libConfig))();
} else {
  compile(esDir)();

  gulp.watch(`${src}/**/*.ts`, compileTs(esDir));
  gulp.watch(`${src}/**/*.less`, compileLess(esDir));
  gulp.watch(`${src}/**/*.wxml`, copy(esDir, 'wxml'));
  gulp.watch(`${src}/**/*.wxs`, copy(esDir, 'wxs'));
  gulp.watch(`${src}/**/*.json`, copy(esDir, 'json'));
}
