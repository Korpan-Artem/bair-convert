import React from "react"
import item1 from "../../images/promo.png"
import item2 from "../../images/promoBottom.png"
import SliderWithTwo from "../SliderWithTwo/SliderWithTwo";
import VideoContainer from "../VideoContainer/VideoContainer"
import bg from "../../images/accessories3.png"

const SliderPromoSlider = ({ data }) => {
  return (
    <>
      <div className={"wrapper"} id={"reviews"}>
        <h2 className={"accordion-main-title"}>Блок з фото-відгуками з instagram</h2>

        <SliderWithTwo>
          <div className={"three-itempage__max-item-wrapper"}>
            <img
              src={item1}
              className="instagram-image"
              alt={""}
            />
          </div>
          <div className={"three-itempage__max-item-wrapper"}>
            <img
              src={item2}
              className="instagram-image"
              alt={""}
            />
          </div>
          <div className={"three-itempage__max-item-wrapper"}>
            <img
              src={item1}
              className="instagram-image"
              alt={""}
            />
          </div>
        </SliderWithTwo>
      </div>
    </>
  )
}

export default SliderPromoSlider

