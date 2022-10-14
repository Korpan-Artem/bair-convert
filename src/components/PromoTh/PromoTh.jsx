import React from "react"
import "../../styles/style.css"
import promoTh from "../../images/promoTh.png";


const PromoTh = () => {
  return (
    <div className={"main_banner_image-promo"}>
      <div className={"promoTh_image_text"}>
        <h3 className={"promo-text"}>Виберіть теплий
          та стильний аксесуар
          на додаток до вашого
          конверта або коляски
        </h3>
      </div>
      <img src={promoTh} className={"image__promo_banner"} />
    </div>
  )
}

export default PromoTh
