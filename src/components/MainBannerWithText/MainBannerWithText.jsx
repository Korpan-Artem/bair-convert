import React from "react"
import "../../styles/style.css"
import two_banner from "../../images/two-banner.png"

const MainBannerWithText = () => {
  return (
    <div className={"main_banner-box"}>
      <div className={"main_banner_text"}>
        <p className={"main-title"}>Можно використовувати
          у глибокій люльці,
          прогулянковому блоці
          та санчатах</p>
      </div>
      <div className={"main_banner_image"}>
        <div className={"main_banner_image_text"}>
          <h3 className={"size-banner-text"}><span className={"size-text"}>70</span> см в довжину і вище</h3>
          <p className={"size-banner-subtext"}>оптимальні розміри для комфортного розміщення в ній конверт</p>
        </div>
        <img src={two_banner} className={"image_banner"} />
      </div>
    </div>
  )
}

export default MainBannerWithText
