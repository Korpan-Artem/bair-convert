import React from "react"
import "../../styles/style.css"
import promoBottom from "../../images/promoBottom.png";


const PromoTextBottom = () => {
  return (
    <div className={"main_banner_image-promo"}>
      <div className={"promo_image_text-bottom"}>
        <h3 className={"promo-text"}>Верхня тканина 100% нейлон</h3>
        <p className={"promo-subtext subtext-margin"}>
          Конверт виготовляється із міцної тканини, яка не продувається вітром
          і не промокає.
        </p>
        <p className={"promo-subtext subtext-margin"}>
          Як утеплювач був використаний щільний шар синтепону. Усередині м'яка плюшева тканина.
        </p>
      </div>
      <img src={promoBottom} className={"image__promo_banner"} />
    </div>
  )
}

export default PromoTextBottom
