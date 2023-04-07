module.exports = {
  siteMetadata: {
    title: `心视`,
    description: `Beatosion.com is a website that provides professional high-precision motion capture technology solutions based on artificial intelligence sign recognition.`,
    author: `Beatosion.com`,
    keywords: `react, graphql, gatsby`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `beatosion.com`,
        short_name: `KOMOTO`,
        start_url: `/`,
        background_color: `#645A8C`,
        theme_color: `#8C78B4`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`
  ],
}
