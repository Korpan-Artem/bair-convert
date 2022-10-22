import React, { useEffect, useRef, useState } from "react"
import "../../styles/style.css"
import logo_convert from "../../images/logo-convert.svg"
import {graphql, useStaticQuery} from "gatsby";
import {hideHeader} from "./hooks";


export const query = graphql`
    query Header{
        allStrapiAccessories {
            nodes {
                title
                price
                url
               
                mainImage {
                    localFile {
                        url
                    }
                }
            }
        }
        allStrapiProducts {
            nodes {
                title
                price
                url

                mainImage {
                    localFile {
                        url
                    }
                }
            }
        }
    }
`

const Header = () => {
  const {
    allStrapiAccessories ,
    allStrapiProducts
  } = useStaticQuery(query)

  // hideHeader();


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
            src={logo_convert}
            alt="A Gatsby astronaut"
          />
      </a>
      <nav className="header__menu">
        {
          menuOpen ? (
            <div className={"overlay"}></div>
          ) : ""
        }
        <ul className={`header__nav-list ${menuOpen ? "active" : ""}`}>
          <h3 className={"promo-banner-text"}>Конверти</h3>
            {
              allStrapiProducts.nodes.map((item,index) => (
                <li className="header__nav-item">
                  <a
                    className={
                      "header__nav-link"
                    }
                    href={`/${item.url}/`}
                    key={index}
                  >
                    {item.title}
                  </a>
                </li>
              ))
            }
          <h3 className={"promo-banner-text"}>Рукавички</h3>
          {allStrapiAccessories.nodes.map((item,index) => (
            <li className="header__nav-item">
              <a
                className={
                  "header__nav-link"
                }
                href={`/${item.url}/`}
                key={index}
              >
                {item.title}
              </a>
            </li>
          ))}
            <div className={"menu-margin"}>
              <li className="header__nav-item">
                <a
                  className={
                    "header__nav-link"
                  }
                  href="/#reviews"
                  onClick={openMenu}
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
                  onClick={openMenu}
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
                  onClick={openMenu}
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
