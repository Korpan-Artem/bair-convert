import React from "react"
import "../../styles/style.css"

const BlockTitle = ({title, article, colorTitle}) => {
  console.log(title, article, colorTitle)
  return (
    <div className={"block-title-box wrapper"}>
      <h2 className={"big-title"}>{title}</h2>
      <div>
        <div className={"article"}>Артикул: {article}</div>
        <div className={"color-item"}>{colorTitle}</div>
      </div>
    </div>

  )
}

export default BlockTitle
