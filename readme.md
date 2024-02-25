# zimg

[![Build Status][actions-img]][actions-url]
[![License][license-img]][license-url]
[![NPM Version][version-img]][version-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![Dependency Status][dependency-img]][dependency-url]
[![Code Style][style-img]][style-url]

> Pre-optimize images for Next.js production or others via sharp

## Installation

```sh
$ npm install zimg
```

## CLI Usage

Use npx:

```sh
$ npx zimg <cwd> [options]
```

Globally install:

```sh
$ npm install zimg -g
```

```sh
$ zimg --help
zimg/0.1.0

Usage:
  $ zimg [cwd]

Commands:
  [cwd]  Optimize images for production via sharp

For more info, run any command with the `--help` flag:
  $ zimg --help

Options:
  -p, --pattern <pattern>  Glob pattern to match files, default to `**/*.{jpg,jpeg,png}`
  -s, --sizes <sizes>      Sizes to generate, default to `[640, 720, 1280, 1600]`
  -q, --quality <quality>  Quality of generated images, default to `75`
  -v, --version            Display version number
  -h, --help               Display this message
```

## API Usage

```js
import { zimg } from 'zimg'
await zimg({
  cwd: process.cwd(),
  pattern: '**/*.{jpg,jpeg,png}',
  sizes: [640, 720, 1280, 1600],
  quality: 75
})
// searching images in cwd, and resize it
```

## API Reference

### zimg(options?)

#### options

##### cwd

- Type: `string`
- Details: Current working directory
- Default: `process.cwd()`

##### pattern

- Type: `string`
- Details: Glob pattern to match files
- Default: `'**/*.{jpg,jpeg,png}'`

##### filename

- Type: `string`
- Details: Filename of optimized image
- Default: `'[name].[size]'`

##### sizes

- Type: `number[]`
- Details: Sizes to generate
- Default: `[640, 720, 1280, 1600]`

##### quality

- Type: `number`
- Details: Quality of generated images
- Default: `75`

##### skipOptimized

- Type: `boolean`
- Details: Skip optimized images rather than overwrite
- Default: `true`

## Related

- [zce/velite](https://github.com/zce/velite) - Turns Markdown / MDX, YAML, JSON, or others into app's data layer with Zod schema.
- [zce/caz](https://github.com/zce/caz) - A simple yet powerful template-based Scaffolding tools.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](license) &copy; [zce](https://zce.me)

[actions-img]: https://img.shields.io/github/actions/workflow/status/zce/zimg/main.yml
[actions-url]: https://github.com/zce/zimg/actions
[license-img]: https://img.shields.io/github/license/zce/zimg
[license-url]: https://github.com/zce/zimg/blob/master/license
[version-img]: https://img.shields.io/npm/v/zimg
[version-url]: https://npm.im/zimg
[downloads-img]: https://img.shields.io/npm/dm/zimg
[downloads-url]: https://npm.im/zimg
[dependency-img]: https://img.shields.io/librariesio/github/zce/zimg
[dependency-url]: https://github.com/zce/zimg
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
