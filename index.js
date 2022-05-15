/* global hexo */
'use strict'

const { mergeConfig } = require('./lib/config')
const { getRenderer } = require('./lib/compile')

const config = mergeConfig(hexo)

hexo.extend.renderer.register('jsx', 'html', getRenderer(config.react), true)
