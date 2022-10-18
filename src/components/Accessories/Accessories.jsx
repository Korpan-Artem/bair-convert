import React from "react"
import "../../styles/test.css"
import image from "../../images/accessories3.png"

const Accessories = ({data}) => {
  return (
    <div className={"wrapper "}>
      {/*<div className={"main_catalog-box main_catalog-box-margin wrapper "}>*/}
      {/*  <h2 className={"main-title"}>Пропонуємо разом з конвертом</h2>*/}
      {/*  <div className={"accessories-block-box"}>*/}
      {/*    {data.nodes.map((item,index) => (*/}
      {/*      <a href={item.url} key={index} className={"accessories-block-box-item"}>*/}
      {/*        <div className={"accessories-block-box-item-image"}>*/}
      {/*          <img src={item.mainImage.localFile.url} alt={""} className={"image-width-accessories"}/>*/}
      {/*        </div>*/}
      {/*        <div className={"main_catalog-box-item-text"}>*/}
      {/*          <h3 className={"main_catalog-box-item-title"}>{item.title}</h3>*/}
      {/*          <h3 className={"main_catalog-box-item-price"}>{item.price}</h3>*/}
      {/*        </div>*/}
      {/*      </a>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="accessories-block">*/}
      {/*  <h1>Allo</h1>*/}
      {/*  <div className="accessories-box-items">*/}
      {/*    <div className="accessories-box-item">*/}
      {/*      <div className="accessories-box-item-image">*/}
      {/*        <img src={image} className="image-width"/>*/}
      {/*      </div>*/}
      {/*      <div className="accessories-box-item-text">*/}
      {/*        <div className="accessories-box-item-title">Title</div>*/}
      {/*        <div className="accessories-box-item-price">2999 грн</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="accessories-box-item">*/}
      {/*      <div className="accessories-box-item-image">*/}
      {/*        <img src={image} className="image-width"/>*/}
      {/*      </div>*/}
      {/*      <div className="accessories-box-item-text">*/}
      {/*        <div className="accessories-box-item-title">Title</div>*/}
      {/*        <div className="accessories-box-item-price">2999 грн</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="polaroid">*/}
      {/*  <img src={image} alt="5 Terre" className="image-width"/>*/}
      {/*    <div className="container">*/}
      {/*      <p>Cinque Terre</p>*/}
      {/*    </div>*/}
      {/*</div>*/}

      {/*<div className="polaroid">*/}
      {/*  <img src={image} alt="Norther Lights" className="image-width"/>*/}
      {/*    <div className="container">*/}
      {/*      <p>Northern Lights</p>*/}
      {/*    </div>*/}
      {/*</div>*/}

      <div className="panel">
        <div className="container">
          <img src={image} alt="" className={"image"}/>
          <div className="accessories-box-item-text">
            <div className="accessories-box-item-title">Title</div>
            <div className="accessories-box-item-price">2999 грн</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Accessories
