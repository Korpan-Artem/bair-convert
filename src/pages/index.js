import * as React from "react"
import HomePage from "../modules/HomePage";
import {graphql} from "gatsby";

export const query = graphql`
    query IndexPage{
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
        allStrapiAccessories{
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

const IndexPage = () => {
  return (
      <HomePage />
  )
}

export default IndexPage


