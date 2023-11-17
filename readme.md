# zimg

[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![Code Style][style-img]][style-url]

> optimize images for production via sharp

## Installation

```shell
$ npm install zimg

# or yarn
$ yarn add zimg
```

## Usage

<!-- TODO: Introduction of Usage -->

```javascript
const zimg = require('zimg')
const result = zimg('w')
// result => 'w@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### zimg(input, options?)

#### input

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

Use npx:

```shell
$ npx zimg <input> [options]
```

Globally install:

```shell
$ npm install zimg -g
# or yarn
$ yarn global add zimg
```

```shell
$ zimg --help
zimg/0.1.0

Usage:
  $ zimg <input>

Commands:
  <input>  Sample cli program

For more info, run any command with the `--help` flag:
  $ zimg --help

Options:
  --host <host>  Sample options
  -h, --help     Display this message
  -v, --version  Display version number

Examples:
  $ zimg w --host zce.me
```

## Related

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

[MIT](LICENSE) &copy; [zce](https://zce.me)



[license-img]: https://img.shields.io/github/license/zce/zimg
[license-url]: https://github.com/zce/zimg/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/zimg
[downloads-url]: https://npm.im/zimg
[version-img]: https://img.shields.io/npm/v/zimg
[version-url]: https://npm.im/zimg
[dependency-img]: https://img.shields.io/librariesio/github/zce/zimg
[dependency-url]: https://github.com/zce/zimg
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
