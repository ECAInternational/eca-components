import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';

const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: `dist/${packageJson.main}`,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: `dist/${packageJson.module}`,
        format: 'esm',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      typescript(),
      resolve({
        extensions: ['.ts', '.tsx']
      }),
      commonjs(),
      terser(),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts', '.tsx'],
        exclude: 'node_modules/**'
      })
    ],
    external: ['react', 'react-dom']
  }
];
