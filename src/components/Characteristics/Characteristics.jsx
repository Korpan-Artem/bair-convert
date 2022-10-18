import React from "react"
import "../../styles/style.css"
import ReactMarkdown from "react-markdown"


const Characteristics = ({desription}) => {
  return (
    <div className={"characteristics-block wrapper"}>
      <ReactMarkdown>{desription}</ReactMarkdown>
    </div>
  )
}

export default Characteristics









