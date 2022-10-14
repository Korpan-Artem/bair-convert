import * as React from "react"
import ToTop from "../ToTop/ToTop";

const Footer = () => {

  return (
    <footer className="footer wrapper">
      <ul className="footer__list">
          <li  className="footer__item">
            <a className="footer__link" href={""} >
              Контакти
            </a>
          </li>
        <li  className="footer__item">
          <a className="footer__link" href={""} >
            Обслуговування клiэнтiв
          </a>
        </li>
        <li  className="footer__item">
          <a className="footer__link" href={""} >
            Privacy Policy
          </a>
        </li>
      </ul>
      <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" href={""} target={"_blank"}>
              facebook
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href={""} target={"_blank"}>
              instagram
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href={""} target={"_blank"}>
              youtube
            </a>
          </li>
      </ul>
      <ToTop/>
      <p className="footer__copyright">©2022 bair</p>
    </footer>
  )
}

export default Footer
