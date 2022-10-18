import * as React from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BlockBuy from "../../components/BlockBuy/BlockBuy";
import Characteristics from "../../components/Characteristics/Characteristics";
import Accessories from "../../components/Accessories/Accessories";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import SliderCharacteristics from "../../components/SliderCharacteristics/SliderCharacteristics";
import IconColorSlider from "../../components/IconColorSlider/IconColorSlider";



const ProductPage = ({
  data: {
    url,
    title,
    price,
    description,
    colorSlider
  },
  relatedProducts: {
      nodes
  },
  also
}) => {
  return (
    <div className={"wrapper-mobile"}>
      <Header/>


      <IconColorSlider data={colorSlider} title={title}/>
      <Characteristics
        desription={description}
      />
      <RelatedProducts url={url} data={nodes}/>
      <Accessories data={also}/>
      <BlockBuy price={price}/>
      <Footer/>
    </div>
  )
}

export default ProductPage


