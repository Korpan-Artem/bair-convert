import React from "react"
import "swiper/css";
import "swiper/css/pagination";
import SliderCharacteristicsItem from "./SliderCharacteristicsItem";



const SliderCharacteristics = ({data}) => {
  return (
    <>
       <SliderCharacteristicsItem data={data} initialSlide={0}/>
    </>
  )
}

export default SliderCharacteristics

