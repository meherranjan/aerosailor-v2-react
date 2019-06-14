const website = require('./config/website')
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
	siteMetadata: {
		title: ``,
		description: ``,
		url: `https://aerosailor.com`,
		author: `@meherranjan`,
		image: `/self.jpg`,
		twitterUsername: "@meherranjan",

		siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
        path: `${__dirname}/content/`,
        name: `blog`,
      },
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				// icon: `src/images/gatsby-icon.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-sass`
	],
}
