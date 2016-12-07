// Rollup plugins
import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'client/scripts/main.js',
  dest: 'client/js/bundle.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    buble({ exclude: 'node_modules/**', jsx: 'h' }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
  ]
};
