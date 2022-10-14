import React, { useState, useEffect } from "react"
import item1 from "../../images/slide1.png"
import item2 from "../../images/slide2.png"
import SliderProduct from "../SliderProduct/SliderProduct";

const SliderCharacteristics = ({slider1,slider2,slider3,slider4,slider5}) => {
  return (
    <>
      <div>
        <SliderProduct>
          <div className="three-itempage__max-item ">
            <img
              src={item1}
              className="three-itempage__max-item-img"
            />
          </div>
          <div className="three-itempage__max-item">
            <img
              src={item2}
              className="three-itempage__max-item-img"
            />
          </div>
        </SliderProduct>
      </div>
    </>
  )
}

export default SliderCharacteristics

