import React from "react"
import "../../styles/style.css"
import gloves1 from "../../images/gloves.png";
import gloves2 from "../../images/gloves2.png";
import accessories3 from "../../images/accessories3.png";


const Accessories = () => {
  return (
    <div >
      <div className={"main_catalog-box wrapper"}>
        <h2 className={"main-title"}>Пропонуємо разом з конвертом</h2>
        <div className={"accessories-box-items"}>
          <a href={"#"} className={"accessories-box-item-1"}>
            <div className={"main_catalog-box-item-image"}>
              <img src={gloves1}/>
            </div>
            <div className={"main_catalog-box-item-text"}>
              <h3 className={"main_catalog-box-item-title"}> Alaska Thermo</h3>
              <h3 className={"main_catalog-box-item-price"}>2 299 грн</h3>
            </div>
          </a>
          <a href={"#"} className={"accessories-box-item-2"}>
            <div className={"main_catalog-box-item-image"}>
              <img src={gloves2}/>
            </div>
            <div className={"main_catalog-box-item-text"}>
              <h3 className={"main_catalog-box-item-title"}> Alaska Thermo</h3>
              <h3 className={"main_catalog-box-item-price"}>2 299 грн</h3>
            </div>
          </a>
          <a href={"#"}  className={"accessories-box-item-3"}>
            <div className={"main_catalog-box-item-image"}>
              <img src={accessories3}/>
            </div>
            <div className={"main_catalog-box-item-text"}>
              <h3 className={"main_catalog-box-item-title"}> Alaska Thermo</h3>
              <h3 className={"main_catalog-box-item-price"}>2 299 грн</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Accessories
