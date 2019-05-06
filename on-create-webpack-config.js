module.exports = async ({ actions, rules, store }) => {
  const program = store.getState().program
  const { browserslist } = program

  let postCssPlugins = [
    require(`postcss-mq-optimize`)(),
    require(`postcss-pxtorem`)(),
    require(`autoprefixer`)({
      browsers: browserslist,
      flexbox: `no-2009`,
    }),
  ]

  const postcssRules = rules.postcss({ plugins: postCssPlugins })

  actions.setWebpackConfig({ module: { rules: [postcssRules] } })
}
