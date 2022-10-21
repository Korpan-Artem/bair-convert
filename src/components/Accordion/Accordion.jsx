import React, { useRef, useState } from "react"
import "./styles.css"
import { data } from "./data"
import AccordionItem from "./AccordionItem";

const Accordion = () => {

  console.log("accordion",data);
  return (
    <div className={"accordion-box wrapper"} id={"faq"}>
      <h2 className={"accordion-main-title"}>FAQ</h2>
    <div className={"accordion-border-top"}>
      {
        data.map((item,index) => (
          <AccordionItem  key={index} title={item.title} description={item.description}/>
        ))
      }
    </div>
    </div>
  )
}

export default Accordion
