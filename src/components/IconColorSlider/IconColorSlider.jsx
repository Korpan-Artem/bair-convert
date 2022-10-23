import React, {useState,useEffect} from "react"
import SliderCharacteristics from "../SliderCharacteristics/SliderCharacteristics";
import BlockTitle from "../BlockTitle/BlockTitle";
import {useLocation} from "@reach/router";
import { navigate } from "gatsby";

import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";




const IconColorSlider = ({data,title}) => {

  const middle = Math.floor(data.length / 2);
  const [colorArticle, setColorArticle] = useState("")
  const [colorTitle, setColorTitle] = useState("")
  const [sliderImage, setSliderImage] = useState([])
  const location = useLocation()

  let indexActiveItem;
  const loc = location.search.split("").splice(9).join('');
  let activeItem = data.filter((item, index) => {
    console.log(index);
    if(`${item?.article}` === loc) {
      return item
    }
  })
  activeItem = activeItem[0];

  const changeSlider = (item) => {
    navigate(`?article=${item.article}`)
    setColorArticle(!!item?.article && item?.article)
    setColorTitle(!!item?.color && item?.color)
    setSliderImage(!!item?.characteristicsSlider && item?.characteristicsSlider)
  }


  useEffect(() => {
    if(location.search) {
      return changeSlider(activeItem)
      // indexActiveItem  = data.findIndex(item => `${item?.article}` === loc)
      console.log("indexActiveItem",indexActiveItem);
    }
    if(data.length !== 1) {
      return !!data && changeSlider(!!data && data[middle]);
    } else {
      return !!data && changeSlider(!!data && data[0]);
    }
  }, []);



  
  return (
    <>
      <BlockTitle
        title={title}
        article={colorArticle}
        colorTitle={colorTitle}
      />
      {!!sliderImage && <SliderCharacteristics data={sliderImage}/>}
      <div className={"icons-box"} id={"icon-slider"}>
        <Swiper
          slidesPerView={5.5}
          spaceBetween={3}
          centeredSlides={true}
          initialSlide={!!location.search ? indexActiveItem : middle}
          slideToClickedSlide={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {data.map((item,index) => (
            <SwiperSlide  key={index}>
            <div
              className={`icon-item ${colorTitle === item.color ? "icon-select-item" : ""}`}
              style={{minWidth: "63px"}}
              onClick={() => {changeSlider(item)}}
            >
              <div className={"icon-image"}>
                <img src={item.imageColor.localFile.url} alt={""} className={"three-itempage__max-item-img border-image"}/>
              </div>
              <div className={"icon-title"}>
                {item.color}
              </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default IconColorSlider

