import React, { useEffect, useRef, useState } from "react"
import "../../styles/style.css"
import logo_black from "../../images/logo-black.svg"

const Header = () => {
  const dropDownRef = useRef()

  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const closeMenu = e => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        menuOpen && setMenuOpen(false)
      }
    }

    document.addEventListener("click", closeMenu)

    return () => document.removeEventListener("click", closeMenu)
  }, [menuOpen])

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header
      className={
      "header header-block wrapper"
      }
      id={"top"}
    >
      <a href="/">
          <img
            className="header__logo"
            src={logo_black}
            alt="A Gatsby astronaut"
          />
      </a>
      <div className="sub-logo">зимовi конверти</div>
      <nav className="header__menu">

        <ul className={`header__nav-list ${menuOpen ? "active" : ""}`}>
          <h3 className={"promo-banner-text"}>Конверти</h3>
            <li className="header__nav-item">
              <a
                className={
                    "header__nav-link"
                }
                href="#"
              >
                Alaska Thermo
              </a>
            </li>
            <li className="header__nav-item">
              <a
                className={
                  "header__nav-link"
                }
                href="#"
              >
                Canada
              </a>
            </li>
          <h3 className={"promo-banner-text"}>Рукавички</h3>
            <li className="header__nav-item">
              <a
                className={
                "header__nav-link"
                }
                href="#"
              >
               Nortmuf
              </a>
            </li>
            <li className="header__nav-item">
              <a
                className={
                  "header__nav-link"
                }
                href="#"
              >
                Thermo Mittens
              </a>
            </li>
            <div className={"menu-margin"}>
              <li className="header__nav-item">
                <a
                  className={
                    "header__nav-link"
                  }
                  href="/#reviews"
                >
                  Вiдгуки
                </a>
              </li>
              <li className="header__nav-item">
                <a
                  className={
                    "header__nav-link"
                  }
                  href="/#faq"
                >
                  FAQ
                </a>
              </li>
              <li className="header__nav-item">
                <a
                  className={
                    "header__nav-link"
                  }
                  href="/#delivery"
                >
                  Оплата i доставка
                </a>
              </li>
            </div>
        </ul>
      </nav>
      <div className="header__burger-menu-box">
        <div
          className={`header__burger-menu ${menuOpen ? "active" : ""}`}
          onClick={openMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
