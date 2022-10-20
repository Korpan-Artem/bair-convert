import React, {useState,useEffect} from "react"
import SmallSlider from "../SmallSlider/SmallSlider";
import SliderCharacteristics from "../SliderCharacteristics/SliderCharacteristics";
import BlockTitle from "../BlockTitle/BlockTitle";
// import { createSearchParams, useSearchParams } from "react-router-dom";


const IconColorSlider = ({data,title}) => {

  // const [searchParams, setSearchParams] = useSearchParams();
  // const favoriteFruit = searchParams.get("article");
  const [colorArticle, setColorArticle] = useState("")
  const [colorTitle, setColorTitle] = useState("")
  const [sliderImage, setSliderImage] = useState([])


  const changeSlider = (item) => {
    setColorArticle(item?.article)
    setColorTitle(item?.color)
    setSliderImage(item?.characteristicsSlider)
    // setSearchParams(
    //   createSearchParams(item?.article)
    // );
  }


  useEffect(() => {
    if(data.length !== 1) {
      !!data && changeSlider(!!data && data[Math.floor(data.length / 2)]);
    } else {
      !!data && changeSlider(!!data && data[0]);
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
        <SmallSlider>
          {data.map((item,index) => (
            <div
              key={index}
              className={`icon-item ${colorTitle === item.color ? "icon-select-item" : ""}`}
              style={{minWidth: "63px"}}
              onClick={() => {changeSlider(item)}}
            >
              <div className={"icon-image"}>
                <img src={item.imageColor.localFile.url} alt={""}/>
              </div>
              <div className={"icon-title"}>
                {item.color}
              </div>
            </div>
          ))}
        </SmallSlider>
      </div>
    </>
  )
}

export default IconColorSlider

