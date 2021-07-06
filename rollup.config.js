import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'

export default {
  input: 'src/index.ts',
  output: {
    name: 'JsMediaDevices',
    file: 'bin/js-media-devices.js',
    format: 'umd',
    sourcemap: true,
    sourcemapFile: 'bin/js-media-devices.js.map'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions: ['.js', '.ts']
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    minify({
      mangle: { topLevel: true }
    })
  ]
}
