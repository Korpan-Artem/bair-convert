import React from "react"
import "../../styles/style.css"


const MainCatalog = ({data}) => {
  console.log("mainCatalog",data);
  return (
    <div className={"main_catalog-box wrapper"}>
      <h2 className={"main-title"}>Моделі на будь-який смак</h2>
      <div className={"main_catalog-box-items"}>
        {data.nodes.map((item,index) => (
          <a key={index} href={item.url} className={"main_catalog-box-item"}>
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

export default MainCatalog
