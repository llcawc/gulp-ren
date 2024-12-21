// gulpfile.js • rename files • pasmurno by llcawc • https://github.com/llcawc

// import modules
import gulp from 'gulp'
const { src, dest, series, watch } = gulp
import { deleteAsync as del } from 'del'
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import rename from './gulp-ren.js'

// variables & path
const baseDir = 'src'
const distDir = 'dist'

let paths = {
  styles: {
    src: baseDir + '/*.css',
    dest: distDir,
  },
  clean: [distDir],
}

// styles task
function styles() {
  return src(paths.styles.src)
    .pipe(postcss([cssnano({ preset: 'default', comments: false })]))
    .pipe(rename({ suffix: '.min', extname: '.css' }))
    .pipe(dest(paths.styles.dest))
}

// clean task
function clean() {
  return del(paths.clean)
}

// watch
function watcher() {
  watch(baseDir + '/**/*.css', styles)
}

// export
export { clean, styles }
export let build = series(clean, styles)
export let dev = series(build, watcher)
