import * as React from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BlockBuy from "../../components/BlockBuy/BlockBuy";
import Characteristics from "../../components/Characteristics/Characteristics";
import Accessories from "../../components/Accessories/Accessories";
import RelatedProducts from "../../components/RelatedProducts1/RelatedProducts";
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import SliderCharacteristics from "../../components/SliderCharacteristics/SliderCharacteristics";
import IconColorSlider from "../../components/IconColorSlider/IconColorSlider";



const ProductPage1 = () => {
  return (
    <>
      <Header/>
      <BlockTitle
        title={"Alaska Thermo"}
        article={"Артикул: 678909"}
        color={"green"}
      />
      <SliderCharacteristics
        slider1={""}
        slider2={""}
        slider3={""}
        slider4={""}
        slider5={""}
        slider6={""}
      />
      <IconColorSlider
        titleColor1={""}
        imageColor1={""}
        titleColor2={""}
        imageColor2={""}
      />
      <Characteristics
        item1={"Водовідштовхувальні матеріали та теплий наповнювач. Не пускати воду і при цьому пропускати пару - дихати."}
        item2={"Прорізи для 5-ти точкових ременів безпеки. Штучне хутро, яке можна прикріпити"}
        item3={""}
        item4={""}
        item5={""}
        item6={""}
        item7={""}
        item8={""}
      />
      <RelatedProducts/>
      <Accessories/>
      <BlockBuy/>
      <Footer/>
    </>
  )
}

export default ProductPage1


