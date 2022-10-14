import  React, {useState,useEffect} from "react"

import "./styles.css"
import call from "../../images/call.svg"
import ReactModal from "react-modal";
import close from "../../images/close.svg";




const CommunicationButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onModalOpen = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  }

  const onRequestClose = () => {
    document.body.style.removeProperty("overflow")
    setIsOpen(false)
  }

  useEffect(() => {
    return () => {
      document.body.style.removeProperty("overflow")
    }
  }, [])
  return (
    <>
      <div className="multibutton">
        <div className="multibutton__button" onClick={() => onModalOpen()}>
          <div>Купити</div>
        </div>
      </div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        preventScroll
        style={{
          overlay: { zIndex: 100, background: "rgb(57,57,57,0.75)" },
          content: { inset: 1,border: "none", borderRadius: "none", background:"#A0E312", height:"19rem"},
        }}
      >
        <div className="popup__content" >
          <span className="popup__close-btn" onClick={onRequestClose}>
            <img src={close} alt="button-close"/>
          </span>
          <h2 className="popup__title title">Купити</h2>
          <h2 className="popup__subtitle">Залиште свій номер телефону,
            і ми допоможемо оформити Ваше замовлення</h2>
          <form className={"modal_input"}>
            <input placeholder={"Iм'я"}  className={"modal_input_name"}/>
            <input placeholder={"Телефон"}  className={"modal_input_phone"}/>
            <input  value={"Надicлати"} className={"modal_input_button"} type={"submit"}/>

          </form>
        </div>
      </ReactModal>
    </>
  )
}


export default CommunicationButton