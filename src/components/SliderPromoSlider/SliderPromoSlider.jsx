import React from "react"
import StrollersStandardSlider from "../StrollersStandardSlider/StrollersStandardSlider"
import item1 from "../../images/promo.png"
import item2 from "../../images/promo.png"
import VideoContainer from "../VideoContainer/VideoContainer"
import bg from "../../images/accessories3.png"
import video from ".././../images/video1.mp4"

const SliderPromoSlider = ({ data }) => {
  return (
    <>
      <div>
        <h2 className={"accordion-main-title"}>Блок із галереєю
          промо-фото</h2>
        <StrollersStandardSlider>
              <div className="three-itempage__max-item three-itempage__max-item-wrapper">
                <VideoContainer
                  poster={<img src={bg} />}
                  videoURL={video}
                />
              </div>
          <div className="three-itempage__max-item three-itempage__max-item-wrapper">
            <VideoContainer
              poster={<img src={bg} />}
              videoURL={video}
            />
          </div>

        </StrollersStandardSlider>
      </div>
    </>
  )
}

export default SliderPromoSlider

