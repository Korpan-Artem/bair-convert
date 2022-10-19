import * as React from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BlockBuy from "../../components/BlockBuy/BlockBuy";
import Characteristics from "../../components/Characteristics/Characteristics";
import Accessories from "../../components/Accessories/Accessories";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import IconColorSlider from "../../components/IconColorSlider/IconColorSlider";
import {useLocation} from "@reach/router";
import relatedProductsHook from "./hooks";


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
  const location = useLocation();
  const relatedProducts = relatedProductsHook(nodes, location);
  const relatedAccessories = relatedProductsHook(also.nodes, location)

  return (
    <div className={"wrapper-mobile"}>
      <Header/>


      <IconColorSlider data={colorSlider} title={title}/>
      <Characteristics
        desription={description}
      />
      <RelatedProducts data={relatedProducts} title={"Інші моделі"}/>
      <Accessories data={relatedAccessories} title={"Пропонуємо разом з конвертом"}/>
      <BlockBuy price={price}/>
      <Footer/>
    </div>
  )
}

export default ProductPage


