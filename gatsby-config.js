module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://127.0.0.1:1337",
        queryLimit: 1000,
        collectionTypes: [
          "products",
          "accessories"
        ],
        singleTypes: [

        ]
      },
    },
  ],
}

// "https://sleepy-wildwood-40796.herokuapp.com" ||
