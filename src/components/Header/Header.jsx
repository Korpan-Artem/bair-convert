import React, { useEffect, useRef, useState } from "react"
import "../../styles/style.css"
import logo_convert from "../../images/logo-convert.svg"
import {graphql, useStaticQuery} from "gatsby";



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

  const dropDownRef = useRef()

  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const closeMenu = e => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        menuOpen && setMenuOpen(false)
      }
    }

    document.addEventListener("click", closeMenu)

    let prevScrollPos = window.pageYOffset;

    const headerBlock = document.getElementById("header");
    window.addEventListener("scroll", () => {
        let currentScrollPos = window.pageYOffset;

        if(prevScrollPos < currentScrollPos && !menuOpen) {
          headerBlock.classList.add('hide');
        } else {
          headerBlock.classList.remove('hide');
        }

        prevScrollPos = currentScrollPos;
    })


    return () => document.removeEventListener("click", closeMenu)



  }, [menuOpen])

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div id={"top"}></div>
    <header
      className={
      "header header-block wrapper"
      }
      id={"header"}
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
          <h3 className={"promo-banner-text"}>????????????????</h3>
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
          <h3 className={"promo-banner-text"}>??????????????????</h3>
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
                  ??i??????????
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
                  ???????????? i ????????????????
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
    </>
  )
}

export default Header
