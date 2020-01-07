module.exports = {
  siteMetadata: {
    title: 'Kemer Guide',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Scott and Justin',
    twitter: '@staticfuse',
    siteUrl: `https://staticfuse.com`,
  },
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `http://panel.grafon.net/kemer/`,
        blogURI: '/blog'
      },
    },
  ],
}