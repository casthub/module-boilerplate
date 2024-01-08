import pkg from '../package.json' assert { type: 'json' };
import { builtinModules } from 'node:module';
import postcss from 'esbuild-style-plugin';
import { build } from 'esbuild';

const externals = [...Object.keys(pkg.devDependencies ?? {}), ...builtinModules];

/** @type {import('esbuild').BuildOptions} */
const options = {
  external: externals.filter(dep => !dep.startsWith('@casthub')),
  entryPoints: ['./src/index.tsx'],
  plugins: [
    postcss({
      postcssConfigFile: true,
    }),
  ],
  target: 'chrome120',
  logLevel: 'debug',
  sourcemap: false,
  platform: 'node',
  outdir: 'build',
  format: 'esm',
  minify: true,
  bundle: true,
};

await build({
  ...options,
  outExtension: { '.js': '.cjs' },
  format: 'cjs',
});
