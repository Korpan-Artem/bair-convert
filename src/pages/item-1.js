import * as React from "react"
import ProductPage1 from "../modules/ProductPage";
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  query Products {
      allStrapiProducts {
          nodes {
              title
              description
              price
          }
      }
  }
`

const Item1 = () => {
  return (
    <div className={"wrapper-mobile"}>
      <ProductPage1/>
    </div>
  )
}

export default Item1


