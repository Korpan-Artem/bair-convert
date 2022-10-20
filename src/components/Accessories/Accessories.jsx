import React from "react"
import "../../styles/test.css"
import image from "../../images/accessories3.png"

const Accessories = ({data, title}) => {
  return (
      <div className={"main_catalog-box main_catalog-box-margin wrapper "}>
        <h2 className={"main-title"}>{title}</h2>
        <div className={"accessories-block-box"}>
          {!!data && data.map((item,index) => (
            <a href={item.url} key={index} className={"accessories-block-box-item"}>
              <div className={"accessories-block-box-item-image"}>
                <img src={item.mainImage.localFile.url} alt={""} className={"image-width-accessories"}/>
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

export default Accessories
