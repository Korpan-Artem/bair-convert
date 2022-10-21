import React from "react"
import { Swiper,SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";



const SliderCharacteristics = ({data}) => {
  return (
    <>
      <div>
        {
          !!data &&
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            initialSlide={0}
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
              {!!data && data.map((item,index) => (
                <SwiperSlide key={index}>
                <div className="three-itempage__max-item three-itempage__max-item-characteristics">
                  <img
                    src={!!item?.localFile?.url && item?.localFile?.url}
                    className="three-itempage__max-item-img"
                    alt={""}
                  />
                  {/*<div className={"number-slide"}>{`${index+1}/${data.length}`}</div>*/}
                </div>
                </SwiperSlide>
              ))}
          </Swiper>
        }
      </div>
    </>
  )
}

export default SliderCharacteristics

