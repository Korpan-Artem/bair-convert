import React from "react"
import SmallSlider from "../SmallSlider/SmallSlider";
import item1 from "../../images/color-item-1.png"

const SliderCharacteristics = ({titleColor1,imageColor1, titleColor2, imageColor2}) => {
  return (
    <>
      <div className={"icons-box"}>
        <SmallSlider>
          <div className={"icon-item"} style={{minWidth: "50px",minHeight: "70px",height:"75px !important"}}>
            <div className={"icon-image"}>
              <img src={item1} alt={""}/>
            </div>
            <div className={"icon-title"}>
              jungle green
            </div>
          </div>

          <div className={"icon-item"} style={{minWidth: "50px",minHeight: "70px" }}>
            <div className={"icon-image"}>
              <img src={item1} alt={""}/>
            </div>
            <div className={"icon-title"}>
              jungle green
            </div>
          </div>
          <div className={"icon-item"} style={{minWidth: "50px",minHeight: "70px"}}>
            <div className={"icon-image"}>
              <img src={item1} alt={""}/>
            </div>
            <div className={"icon-title"}>
              jungle green
            </div>
          </div>
          <div className={"icon-item"} style={{minWidth: "50px", minHeight: "70px"}}>
            <div className={"icon-image"}>
              <img src={""} alt={""}/>
            </div>
            <div className={"icon-title"}>
              jungle green
            </div>
          </div>
          <div className={"icon-item"} style={{minWidth: "50px", minHeight: "70px"}}>
            <div className={"icon-image"}>
              <img src={item1} alt={""}/>
            </div>
            <div className={"icon-title"}>
              jungle green
            </div>
          </div>
          <div className={"icon-item"} style={{minWidth: "50px", minHeight: "70px"}}>
            <div className={"icon-image"}>
              <img src={item1} alt={""}/>
            </div>
            <div className={"icon-title"}>
              jungle green
            </div>
          </div>
          <div className={"icon-item"} style={{minWidth: "50px", minHeight: "70px"}}>
            <div className={"icon-image"}>
              <img src={item1} alt={""}/>
            </div>
            <div className={"icon-title"}>
              jungle green
            </div>
          </div>
          <div className={"icon-item"} style={{minWidth: "50px", minHeight: "70px"}}>
            <div className={"icon-image"}>
              <img src={item1} alt={""}/>
            </div>
            <div className={"icon-title"}>
              jungle green
            </div>
          </div>
        </SmallSlider>
      </div>
    </>
  )
}

export default SliderCharacteristics

