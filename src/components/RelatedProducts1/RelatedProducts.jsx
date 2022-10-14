import React from "react"
import "../../styles/style.css"
import item1 from "../../images/item1.png"
import item2 from "../../images/item2.png"
import item3 from "../../images/item3.png"
import item4 from "../../images/item4.png"

const RelatedProducts1 = () => {
  return (
    <div className={"main_catalog-box wrapper"}>
      <h2 className={"main-title"}>Інші моделі</h2>
      <div className={"main_catalog-box-items"}>
        <a src={"#"} className={"main_catalog-box-item"}>
          <div className={"main_catalog-box-item-image"}>
            <img src={item1} alt={""}/>
          </div>
          <div className={"main_catalog-box-item-text"}>
            <h3 className={"main_catalog-box-item-title"}> Alaska Thermo</h3>
            <h3 className={"main_catalog-box-item-price"}>2 299 грн</h3>
          </div>
        </a>
        <a src={"#"}  className={"main_catalog-box-item"}>
          <div className={"main_catalog-box-item-image"}>
            <img src={item2}/>
          </div>
          <div className={"main_catalog-box-item-text"}>
            <h3 className={"main_catalog-box-item-title"}> Alaska Thermo</h3>
            <h3 className={"main_catalog-box-item-price"}>2 299 грн</h3>
          </div>
        </a>
        <a src={"#"}  className={"main_catalog-box-item"}>
          <div className={"main_catalog-box-item-image"}>
            <img src={item3}/>
          </div>
          <div className={"main_catalog-box-item-text"}>
            <h3 className={"main_catalog-box-item-title"}> Alaska Thermo</h3>
            <h3 className={"main_catalog-box-item-price"}>2 299 грн</h3>
          </div>
        </a>
        <a src={"#"}  className={"main_catalog-box-item"}>
          <div className={"main_catalog-box-item-image"}>
            <img src={item4}/>
          </div>
          <div className={"main_catalog-box-item-text"}>
            <h3 className={"main_catalog-box-item-title"}> Alaska Thermo</h3>
            <h3 className={"main_catalog-box-item-price"}>2 299 грн</h3>
          </div>
        </a>

      </div>
    </div>
  )
}

export default RelatedProducts1
