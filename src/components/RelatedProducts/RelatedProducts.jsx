import React from "react"
import "../../styles/style.css"
import item1 from "../../images/item1.png"
import item2 from "../../images/item2.png"
import item3 from "../../images/item3.png"
import item4 from "../../images/item4.png"

const RelatedProducts = ({data, title}) => {
  return (
    <div className={"main_catalog-box wrapper"}>
      <h2 className={"main-title"}>{title}</h2>
      <div className={"main_catalog-box-items"}>
        {data.map((item,index) => (
          <a key={index} href={`/${item.url}/`} className={"main_catalog-box-item"}>
            <div className={"main_catalog-box-item-image"}>
              <img src={item.mainImage.localFile.url} alt={""} className={"image-width"}/>
            </div>
            <div className={"main_catalog-box-item-text"}>
              <h3 className={"main_catalog-box-item-title"}>{item.title}</h3>
              <h3 className={"main_catalog-box-item-price"}>{item.price} грн</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
