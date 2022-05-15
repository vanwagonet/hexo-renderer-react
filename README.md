# hexo-renderer-react

> Render ES6 React components as hexo templates

[![npm Version][npm-image]][npm]
[![Dependency Status][deps-image]][deps]
[![Dev Dependency Status][dev-deps-image]][dev-deps]

[![JS Standard Style][style-image]][style]
[![MIT License][license-image]][LICENSE]


## Install

``` bash
$ npm install hexo-renderer-react react react-dom --save
```

This requires you to have `react` installed as well.


## Usage

* Name your components with the `.jsx` extension
* `export default` or `module.exports =` your component class
* ES syntax and JSX is handled by [`babel`][babel] version 7, with the following two presets enabled by default:
  * [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
  * [@babel/preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)


## Config

*_config.yml*

```yaml
# Renderer
react:
  # Babel options
  # https://babeljs.io/docs/en/options
  babel:
    # Babel presets
    # If you want to use your own presets, don't forget to install them first.
    # Default: ['@babel/preset-env', '@babel/preset-react']
    presets: ["@babel/preset-env", "@babel/preset-react"]

    # Babel plugins
    # Default: []
    plugins: []

    # Other babel options
    # ...

  # Other renderer options
  # ...
```


### Examples

*layout.jsx*
```js
import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.page.title}</title>
        </head>
        <body>
          <main dangerouslySetInnerHTML={{__html: this.props.page.body}} />
        </body>
      </html>
    );
  }
}
```

*post.jsx*
```js
import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div>
        <h3>POST: {this.props.page.title}</h3>
        <div>{this.props.page.date.toString()}</div>
      </div>
    )
  }
}
```

*head.jsx*
```js
import React from 'react'
import parse from 'html-react-parser' // To use the html-react-parser library, you need to install it first.

export default props => {
  const { config, theme, favicon_tag, css, js } = props

  return (
    <head>
      <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
      <meta charSet='utf-8' />

      <meta
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        name='viewport'
      />

      <title>{config.title}</title>
      <meta name='title' content={config.title} />
      <meta name='description' content={config.description} />

      <meta property='og:image' content={`/${theme.favicon}`} />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />

      {parse(favicon_tag(theme.favicon))}

      {parse(css('css/style.css'))}
      {parse(js('js/jquery.min.js'))}
    </head>
  )
}
```


## License

This software is free to use under the MIT license. See the
[LICENSE-MIT file][LICENSE] for license text and copyright information.


[npm]: https://www.npmjs.org/package/hexo-renderer-react
[npm-image]: https://img.shields.io/npm/v/hexo-renderer-react.svg
[deps]: https://david-dm.org/thetalecrafter/hexo-renderer-react
[deps-image]: https://img.shields.io/david/thetalecrafter/hexo-renderer-react.svg
[dev-deps]: https://david-dm.org/thetalecrafter/hexo-renderer-react#info=devDependencies
[dev-deps-image]: https://img.shields.io/david/dev/thetalecrafter/hexo-renderer-react.svg
[style]: https://github.com/feross/standard
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[license-image]: https://img.shields.io/npm/l/hexo-renderer-react.svg
[babel]: https://github.com/babel/babel
[babel-6-setup]: http://babeljs.io/blog/2015/10/31/setting-up-babel-6/
[babel-preset-es2015]: https://www.npmjs.com/package/babel-preset-es2015
[babel-preset-react]: https://www.npmjs.com/package/babel-preset-react
[babel-preset-stage-0]: https://www.npmjs.com/package/babel-preset-stage-0
[LICENSE]: https://github.com/thetalecrafter/hexo-renderer-react/blob/master/LICENSE-MIT
