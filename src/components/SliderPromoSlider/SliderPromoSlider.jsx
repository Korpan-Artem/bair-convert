import React, { useState, useEffect } from "react"
import StrollersStandardSlider from "../StrollersStandardSlider/StrollersStandardSlider"
import item1 from "../../images/promo.png"
import item2 from "../../images/promoBottom.png"

const SliderPromoSlider = ({ data }) => {
  return (
    <>
      <div>
        <h2 className={"accordion-main-title"}>Блок із галереєю
          промо-фото</h2>
        <StrollersStandardSlider>
              <div className="three-itempage__max-item three-itempage__max-item-wrapper">
                <img
                  src={item1}
                  className="main_banner_image-promo"
                />

              </div>
          <div className="three-itempage__max-item three-itempage__max-item-wrapper">
            <img
              src={item2}
              className="main_banner_image-promo"
            />
          </div>

        </StrollersStandardSlider>
      </div>
    </>
  )
}

export default SliderPromoSlider

