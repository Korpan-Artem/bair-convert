import React from "react"
import "../../styles/style.css"
import promo from "../../images/promo.png";


const Promo = () => {
  return (
    <div className={"main_banner_image-promo"}>
      <div className={"promo_image_text"}>
        <h3 className={"promo-text"}>Прорізи для ременів безпеки</h3>
        <p className={"promo-subtext"}>
          Спинка с прорезями под ремни
          коляски имеет продуманное строение,
          легко подстраивается под форму
          прогулочного блока.
        </p>
      </div>
      <img src={promo} className={"image__promo_banner"} />
    </div>
  )
}

export default Promo
