import React from "react"
import SliderProduct from "../SliderProduct/SliderProduct";


const SliderCharacteristics = ({data}) => {
  console.log("SliderCharacteristics",data);
  return (
    <>
      <div>
        {
          !!data &&
          <SliderProduct length={data.length}>
            <>
              {!!data && data.map((item,index) => (
                <div key={index} className="three-itempage__max-item three-itempage__max-item-characteristics">
                  <img
                    src={!!item?.localFile?.url && item?.localFile?.url}
                    className="three-itempage__max-item-img"
                    alt={""}
                  />
                  {/*<div className={"number-slide"}>{`${index+1}/${data.length}`}</div>*/}
                </div>
              ))}
            </>
          </SliderProduct>
        }
      </div>
    </>
  )
}

export default SliderCharacteristics

