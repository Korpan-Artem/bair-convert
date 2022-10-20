import  React, {useState,useEffect} from "react"
import "../../styles/style.css"
import ReactModal from "react-modal";
import close from "../../images/close.svg";
import CSSTransitionGroup from "react-transition-group";

const BlockBuy = ({price}) => {
  const [isView, setIsView] = useState(false)
  function getCoords(block) {
    let box = block?.getBoundingClientRect();
    return {
      top: box.top + window.pageYOffset,
    };
  }


  useEffect(() => {
    const checkScroll = () => {

      const blockSlider = document.getElementById("icon-slider");
      const blockBuy = document.getElementById("block-buy");
      const footer = document.getElementById("footer");

      let topOfSlider = getCoords(blockSlider).top;
      let topOfFooter = getCoords(footer).top;

      let heightOfBlock = blockBuy?.offsetHeight;
      let bottomOfSlider = topOfSlider + blockSlider?.offsetHeight + heightOfBlock ;
      let bottomOfScreen = window?.scrollY + window?.innerHeight;

      if(bottomOfScreen > bottomOfSlider && (bottomOfScreen < topOfFooter)) {
        setIsView(true);
      } else if(bottomOfScreen < bottomOfSlider || (bottomOfScreen > topOfFooter)) {
          setIsView(false);
      }

    }
    document.addEventListener('scroll', checkScroll,false);

    return () => {
        document.removeEventListener("scroll", checkScroll, false);
    };
  }, []);

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
    <div className={`block-buy-box ${isView ? "is-view-block-buy active" : "is-view-block-buy"}`} id={"block-buy"}>
      <div className={"block-buy-price"}>
        {price} грн
      </div>
      <div className={"block-buy-button"} onClick={() => onModalOpen()}>
        Купити
      </div>
    </div>
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    preventScroll
    style={{
      overlay: { zIndex: 100, background: "rgb(57,57,57,0.75)" },
      content:{ inset: 1,border: "none", borderRadius: "none", background:"#A0E312", height:"19rem"},
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

export default BlockBuy
