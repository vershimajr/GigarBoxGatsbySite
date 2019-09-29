require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: `GigarBox`,
        description: `Decentralized, Immutable, Cryptographically-Secured File Storage and Management System`,
        author: `@sangeet`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                // printRejected:true,
                develop:false,
                tailwind: true,
                rejected: true,
                whitelist: ["whitelist"],
            },
        },
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
                background_color: `#051927`,
                theme_color: `#051927`,
                display: `minimal-ui`,
                // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // {
        //     resolve: `gatsby-plugin-google-fonts`,
        //     options: {
        //         fonts: [
        //             `Lato`,
        //             // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        //         ],
        //         display: "swap",
        //     },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
