import React from "react"
import { Swiper,SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";



const SliderCharacteristicsItem = ({data, initialSlide}) => {
  return (
    <>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            initialSlide={initialSlide}
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    </>
  )
}

export default SliderCharacteristicsItem

