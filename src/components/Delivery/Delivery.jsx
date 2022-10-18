import React from "react"
import "../../styles/style.css"
import card from "../../images/card.png";
import logo_delivery from "../../images/logo-delivery.png";


const Delivery = () => {
  return (
    <div className={"delivery-box wrapper"} id={"delivery"}>
        <h3 className={"delivery-title delivery"}>Оплата і доставка</h3>
        <img src={card} className={"delivery-card-image delivery"} alt={""}/>
        <h4 className={"delivery-subtitle delivery"}>Предоплата на карту монобанк/привата</h4>
        <img src={logo_delivery} className={"delivery-logo-image delivery"} alt={""}/>
        <h4 className={"delivery-subtitle delivery"}>Накладним платежем Нової пошти</h4>
        <h5 className={"delivery-grey delivery"}>
          +2,5% вартість послуги оплати
          на місці від Нової Пошти
        </h5>
    </div>
  )
}

export default Delivery
