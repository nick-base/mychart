import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import bundleSize from 'rollup-plugin-bundle-size'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const plugins = [
  json(),
  typescript({
    exclude: ['examples'],
  }),
  nodeResolve({
    browser: true,
  }),
  commonjs(),
  babel({
    exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
    include: [
      /src/,
      /query-string/,
      /decode-uri-component/,
      /split-on-first/,
      /strict-uri-encode/,
      /opentelemetry/,
      /zone/,
    ],
    babelHelpers: 'runtime',
    extensions: ['.js', '.ts'],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            edge: '17',
            firefox: '60',
            chrome: '67',
            safari: '11.1',
            ie: '11',
          },
        },
      ],
    ],
    plugins: [['@babel/plugin-transform-runtime', { corejs: 3, version: '^7.20.1' }]],
  }),
  terser(),
  bundleSize(),
]

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/chart.umd.js',
      name: 'Chart',
      format: 'umd',
      strict: false,
    },
    plugins,
  },
  {
    input: 'src/index.ts',
    output: {
      file: `dist/js/v${pkg.version}/chart.umd.js`,
      name: 'Chart',
      format: 'umd',
      strict: false,
    },
    plugins,
  },
  {
    input: 'src/index.ts',
    output: {
      file: `examples/demo-sdk/chart.umd.js`,
      name: 'Chart',
      format: 'umd',
      strict: false,
    },
    plugins,
  },
]
