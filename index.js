/* global hexo */
var babel = require('babel-core')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var reval = require('eval')
require('babel-core/register')

hexo.extend.renderer.register('jsx', 'html', function (data, locals) {
  var js = babel.transform(data.text, { filename: data.path })
  var Component = reval(js.code, data.path, null, true)
  var element = React.createElement(Component, locals)
  var markup = ReactDOMServer.renderToStaticMarkup(element);

  if(markup.match(/^<html/)) {
    markup = '<!doctype html>' + markup;
  }

  return markup;
}, true)
