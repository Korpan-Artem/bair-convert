import React, {useState,useEffect} from "react"
import SmallSlider from "../SmallSlider/SmallSlider";
import SliderCharacteristics from "../SliderCharacteristics/SliderCharacteristics";
import BlockTitle from "../BlockTitle/BlockTitle";

const IconColorSlider = ({data,title}) => {
  const [colorSelect,setColorSelect] = useState(data[Math.ceil(data.length / 2)])


  const [colorArticle, setColorArticle] = useState("")
  const [colorTitle, setColorTitle] = useState("")
  const [sliderImage, setSliderImage] = useState([])


  const changeSlider = (item) => {
    console.log(item)
    setColorArticle(item?.article)
    setColorTitle(item?.color)
    setSliderImage(item?.characteristicsSlider)
    console.log(colorArticle,colorTitle,sliderImage);
  }


  useEffect(() => {
    changeSlider(!!data && data[Math.ceil(data.length / 2)]);
  }, []);


  return (
    <>
      <BlockTitle
        title={title}
        article={colorArticle}
        colorTitle={colorTitle}
      />
      <SliderCharacteristics data={sliderImage}/>
      <div className={"icons-box"} id={"icon-slider"}>
        <SmallSlider>
          {data.map((item,index) => (
            <div
              key={index}
              className={`icon-item ${colorSelect === index ? "icon-select-item" : ""}`}
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

