import React from "react"
import "../../styles/style.css"

const Characteristics = ({item1,item2,item3}) => {
  return (
    <div className={"characteristics-block wrapper"}>
      <ul className="characteristics-list">
        <li className="characteristics-item">{item1}</li>
        <li className="characteristics-item">{item2}</li>
        <li className="characteristics-item">Прорізи для 5-ти точкових ременів безпеки.
          Штучне хутро, яке можна прикріпити
          за допомогою пластикових кнопок.</li>
        <li className="characteristics-item">Прорізи для 5-ти точкових ременів безпеки.
          Штучне хутро, яке можна прикріпити
          за допомогою пластикових кнопок.</li>
        <li className="characteristics-item"> Блискавка по центру забезпечує
          швидкий доступ до дитини.</li>
        <li className="characteristics-item">  Конверт настільки універсальний у своїх габаритах і передбачає використання у санках, люльці, прогулянці будь-якого виробника. Є необхідні кріплення та м'який крій дозволяє його укласти куди завгодно, при цьому залишиться місце для дитини.
        </li>
        <li className="characteristics-item">Догляд – можна прати у пральні, можна змити під душем забруднення.</li>
        <li className="characteristics-item">  Країна виробник - Польща</li>
      </ul>
      <div className={"characteristics-text-box"}>
        <p className={"characteristics-text"}><span className={"strong-text"}>Рекомендований вік:</span> від 0 до 3 років</p>
        <p className={"characteristics-text"}><span className={"strong-text"}>Температурний режим:</span> від +15 °Сдо -20 °С.</p>
        <p className={"characteristics-text"}><span className={"strong-text"}>Зовнішній матеріал:</span> нейлон</p>
        <p className={"characteristics-text"}><span className={"strong-text"}>Наповнення:</span> поліестер</p>
        <p className={"characteristics-text"}><span className={"strong-text"}>Довжина х ширина:</span> 105x50 см</p>
        <p className={"characteristics-text"}>На цей продукт поширюється гарантія
          терміном 1 рік.</p>
      </div>
    </div>
  )
}

export default Characteristics









