import React from "react"
import "../../styles/style.css"
import arrow from "../../images/arrow-white.png"

const MainBanner = () => {
  return (
    <div className="back-to-top-wrapper">
      <a href="#top" className="back-to-top-link" aria-label="Scroll to Top">
        <img className={"back-arrow-image"} src={arrow}/>
      </a>
    </div>
  )
}

export default MainBanner
