import React from "react"
import AccessoriesPage from "../modules/AccessoriesPage"

import { graphql } from "gatsby"


const StrapiProductUrl = ({ data }) => {
  return (
    <AccessoriesPage
      data={data.strapiAccessories}
      relatedProducts={data.allStrapiProducts}
      also={data.allStrapiAccessories}
    />
  )
}

export default StrapiProductUrl

export const query = graphql`
    query PageAccessoriesItem($url: String!){
        strapiAccessories(url: { eq: $url }) {
            url
            title
            price
            description
            colorSlider {
                color
                article
                imageColor {
                    localFile {
                        url
                    }
                }
                characteristicsSlider {
                    localFile {
                        url
                    }
                }
            }
        }
        allStrapiAccessories {
            nodes {
                title
                price
                url
                mainImage {
                    localFile {
                        url
                    }
                }
            }
        }
        allStrapiProducts {
            nodes {
                title
                price
                url
                mainImage {
                    localFile {
                        url
                    }
                }
            }
        }
    }
`
