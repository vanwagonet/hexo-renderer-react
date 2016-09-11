'use strict'

var babel = require('babel-core')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var reval = require('eval')
require('babel-core/register')

module.exports = function compile (data) {
  var js = babel.transform(data.text, { filename: data.path })
  var Component = reval(js.code, data.path, null, true)

  return function (locals) {
    var element = React.createElement(Component.default || Component, locals)
    var markup = ReactDOMServer.renderToStaticMarkup(element)

    if (markup.slice(0, 5).toLowerCase() === '<html') {
      markup = '<!doctype html>\n' + markup
    }

    return markup
  }
}
