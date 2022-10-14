import React from "react"
import "../../styles/style.css"
import main_banner from "../../images/main-banner.png"

const MainBanner = () => {
  return (
    <div className={"main_banner-box"}>
     <div className={"main_banner_text"}>
        <h1 className={"main-title"}>Конверти Bair - улюблені для багатьох батьків</h1>
        <h2 className={"main-subtitle"}>Місткі та затишні, вони ідеально зберігають усередині природну температуру тіла дитини.</h2>
      </div>
      <div className={"main_banner_image"}>
        <img src={main_banner} className={"image_banner"} />
      </div>
    </div>
  )
}

export default MainBanner
