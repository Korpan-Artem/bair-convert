import React from "react"
import { Swiper,SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SliderCharacteristicsItem from "./SliderCharacteristicsItem";



const SliderCharacteristics = ({data}) => {
  return (
    <>
      <div>
        <SliderCharacteristicsItem data={data} initialSlide={0}/>
      </div>
    </>
  )
}

export default SliderCharacteristics

