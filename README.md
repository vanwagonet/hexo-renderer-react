# hexo-renderer-react

> Render ES6 React components as hexo templates

[![npm Version][npm-image]][npm]
[![Dependency Status][deps-image]][deps]
[![Dev Dependency Status][dev-deps-image]][dev-deps]
[![Build Status][build-image]][build]

[![JS Standard Style][style-image]][style]
[![MIT License][license-image]][LICENSE]


## Install

``` bash
$ npm install hexo-renderer-react react --save
```

This requires you to have `react` installed as well.


## Usage

* Name your components with the `.jsx` extension
* `export default` or `module.exports =` your component class
* ES6/7 syntax and JSX is handled by [`babel`][babel] (stage 0)


## License

This software is free to use under the MIT license. See the [LICENSE-MIT file][LICENSE] for license text and copyright information.


[npm]: https://www.npmjs.org/package/hexo-renderer-react
[npm-image]: https://img.shields.io/npm/v/hexo-renderer-react.svg
[deps]: https://david-dm.org/thetalecrafter/hexo-renderer-react
[deps-image]: https://img.shields.io/david/thetalecrafter/hexo-renderer-react.svg
[dev-deps]: https://david-dm.org/thetalecrafter/hexo-renderer-react#info=devDependencies
[dev-deps-image]: https://img.shields.io/david/dev/thetalecrafter/hexo-renderer-react.svg
[build]: https://travis-ci.org/thetalecrafter/hexo-renderer-react
[build-image]: https://img.shields.io/travis/thetalecrafter/hexo-renderer-react.svg
[style]: https://github.com/feross/standard
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[license-image]: https://img.shields.io/npm/l/hexo-renderer-react.svg
[babel]: https://github.com/babel/babel
[LICENSE]: https://github.com/thetalecrafter/hexo-renderer-react/blob/master/LICENSE-MIT
