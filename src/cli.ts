#!/usr/bin/env node
import cac from 'cac'

import { zimg } from '.'
import { name, version } from '../package.json'

const cli = cac(name).version(version).help()

cli
  .command('[cwd]', 'Optimize images for production via sharp')
  .option('-p, --pattern <pattern>', 'Glob pattern to match files, default to `**/*.{jpg,jpeg,png,gif,webp}`')
  .option('-n, --filename <filename>', 'Filename of generated images, default to `[name].[size].webp`')
  .option('-s, --sizes <sizes>', 'Sizes to generate, default to `[640, 720, 1280, 1600]`')
  .option('-q, --quality <quality>', 'Quality of generated images, default to `75`')
  .option('-f, --force', 'Force to optimize images, default to `false`')
  .action((cwd, { pattern, filename, sizes, quality, force }) => {
    return zimg({ cwd: cwd ?? 'public', pattern, filename, sizes, quality, skipOptimized: !force })
  })

const onError = (err: Error): void => {
  if (cli.options.debug) console.error(err)
  console.error('Exception occurred: ' + err.message)
  process.exit(1)
}

process.on('uncaughtException', onError)
process.on('unhandledRejection', onError)

cli.parse()
