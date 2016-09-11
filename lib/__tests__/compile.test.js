/* eslint-env mocha */
'use strict'

const assert = require('assert')
const join = require('path').join
const compile = require('../compile')

const TEMPLATE_PATH = join(__dirname, 'template.jsx')

describe('hexo-renderer-react/lib/compile', () => {
  it('returns function to render html strings', () => {
    const template = `
      var React = require('react')
      module.exports = React.createClass({
        render: function () {
          return React.createElement('div', { className: 't1' }, 'test')
        }
      })
    `

    const compiled = compile({ text: template, path: TEMPLATE_PATH })
    assert.equal(typeof compiled, 'function')

    const rendered = compiled()
    assert.equal(rendered, '<div class="t1">test</div>')
  })

  it('handles es6 and jsx', () => {
    const template = `
      import React from 'react'
      export default () =>
        <div className="t1">test</div>
    `

    const rendered = compile({ text: template, path: TEMPLATE_PATH })()
    assert.equal(rendered, '<div class="t1">test</div>')
  })

  it('prepends doctype if top node is html', () => {
    const template = `
      import React from 'react'
      export default () =>
        <html>test</html>
    `

    const rendered = compile({ text: template, path: TEMPLATE_PATH })()
    assert.equal(rendered, '<!doctype html>\n<html>test</html>')
  })

  it('handles imported components', () => {
    const template = `
      import React from 'react'
      import Html from './html.jsx'
      export default () =>
        <Html>test</Html>
    `

    const rendered = compile({ text: template, path: TEMPLATE_PATH })()
    assert.equal(rendered, '<!doctype html>\n<html>test</html>')
  })

  it('passes locals as props', () => {
    const template = `
      import React from 'react'
      export default (props) =>
        <div>{props.message}</div>
    `

    const rendered = compile({ text: template, path: TEMPLATE_PATH })({
      message: 'Test Message'
    })
    assert.equal(rendered, '<div>Test Message</div>')
  })
})
