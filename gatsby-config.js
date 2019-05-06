const config = require('./config/website')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.description,
    author: config.author,
  },
  pathPrefix: config.pathPrefix,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sass`,
      precision: 8, // For Bootstrap
    },
  ],
}
