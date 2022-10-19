import React from "react"
import ProductPage from "../modules/ProductPage"
import { graphql } from "gatsby"

const StrapiProductUrl = ({ data }) => {

  return (
    <ProductPage
      data={data.strapiProducts}
      relatedProducts={data.allStrapiProducts}
      also={data.allStrapiAccessories}
    />
  )
}

export default StrapiProductUrl

export const query = graphql`
  query ProductPage($url: String!) {
    strapiProducts(url: { eq: $url }) {
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
    allStrapiProducts {
        nodes {
            id
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
      allStrapiAccessories {
          nodes {
              id
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
