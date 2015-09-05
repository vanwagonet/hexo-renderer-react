/* global hexo */
var babel = require('babel-core')
var React = require('react')
var reval = require('eval')
require('babel-core/register')

hexo.extend.renderer.register('jsx', 'html', function (data, locals) {
  var js = babel.transform(data.text, {
    filename: data.path,
    stage: 0
  })
  var Component = reval(js.code, data.path, null, true)
  var element = React.createElement(Component, locals)
  return React.renderToStaticMarkup(element)
}, true)
