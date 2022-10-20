module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:"https://bair-convert-strapi.herokuapp.com",
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
}

