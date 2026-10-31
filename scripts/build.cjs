const path = require('node:path')
const fs = require('node:fs/promises')
const esbuild = require('esbuild')
const yaml = require('js-yaml')

esbuild.build({
  absWorkingDir: path.resolve(__dirname, '..'),
  entryPoints: ['src/index.ts'],
  outfile: 'lib/index.js',
  bundle: true,
  platform: 'node',
  format: 'cjs',
  packages: 'external',
  resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.yml'],
  plugins: [{
    name: 'locales',
    setup(build) {
      build.onLoad({ filter: /\.yml$/ }, async ({ path }) => ({
        contents: JSON.stringify(yaml.load(await fs.readFile(path, 'utf8'))),
        loader: 'json',
      }))
    },
  }],
}).catch(error => {
  console.error(error)
  process.exitCode = 1
})
