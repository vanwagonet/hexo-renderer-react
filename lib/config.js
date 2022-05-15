const baseBabelConfig = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: []
}
const baseConfig = {
  babel: {}
}

/**
 * merge user config into default config
 *
 * @param {import("hexo")} ctx context of hexo
 */
const mergeConfig = ctx => {
  const userConfig = ctx.config.react || {}
  const { babel: userBabelConfig = {} } = userConfig

  ctx.config.react = {
    ...baseConfig,
    ...userConfig
  }

  ctx.config.react.babel = {
    ...baseBabelConfig,
    ...userBabelConfig
  }

  return ctx.config
}

module.exports = {
  mergeConfig
}
