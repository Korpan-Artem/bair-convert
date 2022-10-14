import React from "react"
import "../../styles/style.css"
import promo from "../../images/promo.png";
import two_banner from "../../images/two-banner.png";


const PromoTwo = () => {
  return (
    <>
      <div className={"main_banner_text"}>
        <h3 className={"promo-banner-text"}>Капюшон</h3>
        <div className={""}>
          <p className={"promo-banner-text"}>Якщо на вулиці дуже холодно,
            конверт затягується у верхній частині
            за допомогою шнурків, що дозволяє
            щільно фіксувати капюшон навколо
            голови дитини.
          </p>
          <p className={"promo-two-p"}>Капюшон зі знімним хутряним узліссем.</p>
        </div>
      </div>
      <div className={"main_banner_image"}>
        <div className={"main_banner_image_text"}>
        </div>
        <div>
          <img src={two_banner} className={"image_banner"} />
        </div>
      </div>
    </>
  )
}

export default PromoTwo
