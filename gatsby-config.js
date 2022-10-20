module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:"https://bair-convert-strapi.herokuapp.com" || "http://localhost:1337",
        queryLimit: 1000,
        collectionTypes: [
          "products",
          "accessories"
        ],
        singleTypes: [

        ]
      },
    },
    "gatsby-plugin-use-query-params",
  ],
  flags: {
    DEV_SSR: true
  },
}

