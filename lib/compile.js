'use strict'

const babel = require('@babel/core')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const reval = require('eval')
const register = require('@babel/register')

/**
 * @typedef {import("hexo").extend.RendererData} RendererData data of renderer
 *
 * @typedef {object} Locals hexo locals such as config, layout, etc
 *
 * @typedef {object} Config renderer config
 * @property {import("@babel/core").TransformOptions} babel babel config
 *
 * @typedef {import("react").Component} Component react component
 */

/**
 * compile text into react component
 *
 * @param {RendererData} data data of renderer
 * @param {Config} config renderer config
 */
const compile = (data, config) => {
  const js = babel.transform(data.text, {
    filename: data.path,
    ...config.babel
  })
  return reval(js.code, data.path, null, true)
}

/**
 * render react component into html
 *
 * @param {Component} component react component
 * @param {Locals} locals hexo locals such as config, layout, etc
 * @returns
 */
const render = (component, locals) => {
  const element = React.createElement(component.default || component, locals)
  let markup = ReactDOMServer.renderToStaticMarkup(element)

  if (!locals.layout && markup.toLowerCase().startsWith('<html')) {
    markup = '<!doctype html>\n' + markup
  }

  return markup
}

/**
 * get renderer for register
 *
 * @param {Config} config renderer config
 */
const getRenderer = config => {
  /**
   * @link https://babeljs.io/docs/en/babel-register
   */
  register(config.babel)

  /**
   * @param {RendererData} data data of renderer
   * @param {Locals} locals hexo locals such as config, layout, etc
   * @link https://github.com/hexojs/hexo/blob/6.2.0/lib/theme/view.js#L39
   */
  const renderer = (data, locals) => {
    const component = compile(data, config)
    return render(component, locals)
  }

  /**
   * @param {RendererData} data data of renderer
   * @link https://github.com/hexojs/hexo/blob/6.2.0/lib/theme/view.js#L129
   */
  renderer.compile = data => {
    const component = compile(data, config)
    return locals => render(component, locals)
  }

  return renderer
}

module.exports = {
  compile,
  render,
  getRenderer
}
