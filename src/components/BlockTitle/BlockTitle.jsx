import React from "react"
import "../../styles/style.css"

const BlockTitle = ({title, article, color}) => {
  return (
    <div className={"block-title-box wrapper"}>
      <h2 className={"big-title"}>{title}</h2>
      <div>
        <div className={"article"}>{article}</div>
        <div className={"color-item"}>{color}</div>
      </div>
    </div>

  )
}

export default BlockTitle
