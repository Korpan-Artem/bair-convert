import React,{useState} from "react"
import item1 from "../../images/slide1.png"
import item2 from "../../images/slide2.png"
import SliderProduct from "../SliderProduct/SliderProduct";


const SliderCharacteristics = ({data}) => {
  console.log("SliderCharacteristics",data);

  return (
    <>
      <div>
        <SliderProduct>
          {data.map((item,index) => (
            <>
            <div key={index} className="three-itempage__max-item three-itempage__max-item-characteristics">
              <img
                src={item?.localFile?.url}
                className="three-itempage__max-item-img"
                alt={""}
              />
            </div>
            <div className={"number-slide"}>{`${index+1}/${data.length}`}</div>
            </>
          ))}
        </SliderProduct>
      </div>
    </>
  )
}

export default SliderCharacteristics

