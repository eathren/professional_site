module.exports = {
  siteMetadata: {
    title: `Nolan Braman`,
    description: `Software Engineer in the Greater Boston Area.`,
    author: `@eathren`,
    social: {
      github: `https://github.com/eathren`,
      linkedin: `https://www.linkedin.com/in/nolanbraman/`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nolan Braman | Software Engineer`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#007ea78p`,
        theme_color: `#007ea78p`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
