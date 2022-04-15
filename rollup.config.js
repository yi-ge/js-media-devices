import commonjs from 'rollup-plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/index.ts',
  output: {
    name: 'JsMediaDevices',
    file: 'bin/js-media-devices.min.js',
    format: 'umd',
    sourcemap: true,
    sourcemapFile: 'bin/js-media-devices.min.js.map'
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts']
    }),
    nodeResolve({
      mainFields: ['jsnext:main', 'browser']
    }),
    commonjs(),
    terser()
  ]
}
