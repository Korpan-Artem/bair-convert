import React from "react"
import "../../styles/style.css"
import image_banner from "../../images/image-promo-icon.png"
import icon_promo from "../../images/icon-promo.svg"


const MainBannerWithText = () => {
  return (
    <>
      <div className={"main_banner_text"}>
        <p className={"main-title"}>Розстебніть
          конверт повністю
          та використовуйте
          як килимок для ігор
          чи ковдри</p>
        <img src={icon_promo} className={"icon_promo"} />
        <p className={"promo-subtext promo-icon-subtext"}>
          Конверт передбачає прання
          при делікатному режимі
        </p>
      </div>
      <div className={"main_banner_image"}>
        <img src={image_banner} className={"image_banner"} />
      </div>
    </>
  )
}

export default MainBannerWithText
