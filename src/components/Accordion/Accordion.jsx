import React, { useRef, useState } from "react"
import "./styles.css"

const Accordion = () => {
  const accordionContentRef = useRef(null)

  const [open, setOpen] = useState(false)

  const triggerOpen = () => setOpen(!open)

  return (
    <div className={"accordion-box wrapper"} id={"faq"}>
      <h2 className={"accordion-main-title"}>FAQ</h2>
    <div className={"accordion-border-top"}>

      <div className={`two-storelist__item ${open ? "active" : ""}`}>
        <div
          className={`accordion-title ${open ? "active" : ""}`}
          id="city-1"
          onClick={triggerOpen}
        >
          Чи маєте ви універсальні аксесуари?
        </div>
        <div
          className="accordion-content"
          style={{
            height: open ? accordionContentRef?.current?.offsetHeight + 30 : 0,
          }}
        >
          <div className="content-box" ref={accordionContentRef}>
            Звичайно. Ми докладаємо всіх зусиль, щоб ваше
            батьківство було комфортним та крутим. Саме тому
            ми надаємо 1 рік гарантії на всі аксесуари Bair.
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Accordion
