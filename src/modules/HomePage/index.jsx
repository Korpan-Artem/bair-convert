import * as React from "react"
import Header from "../../components/Header/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import MainBannerWithText from "../../components/MainBannerWithText/MainBannerWithText";
import MainCatalog from "../../components/MainCatalog/MainCatalog";
import Promo from "../../components/Promo/Promo";
import Footer from "../../components/Footer/Footer";
import PromoTwo from "../../components/PromoTwo/PromoTwo";
import PromoTextBottom from "../../components/PromoTextBottom/PromoTextBottom";
import PromoWithIcon from "../../components/PromoWithIcon/PromoWithIcon";
import PromoTh from "../../components/PromoTh/PromoTh";
import Delivery from "../../components/Delivery/Delivery";
import Accessories from "../../components/Accessories/Accessories";
import Accordion from "../../components/Accordion/Accordion";
import SliderPromoSlider from "../../components/SliderPromoSlider/SliderPromoSlider";
import SliderInstagram from "../../components/SliderInstagram/SliderInstagram";
import CommunicationButton from "../../components/CommunicationButton/CommunicationButton";
import {graphql,useStaticQuery} from "gatsby";

export const query = graphql`
    query HomePage{
        allStrapiProducts {
            nodes {
                title
                price
                url
                mainImage {
                    localFile {
                        url
                    }
                }
            }
        }
        allStrapiAccessories {
            nodes {
                title
                price
                url
                mainImage {
                    localFile {
                        url
                    }
                }
            }
        }
    }
`

const HomePage = () => {
    const {
        allStrapiProducts,
        allStrapiAccessories
    } = useStaticQuery(query)
  return (
    <div className={"wrapper-mobile"}>
      <Header/>
      <MainBanner/>
      <MainBannerWithText/>
      <MainCatalog data={allStrapiProducts}/>
      <Promo/>
      <PromoTwo/>
      <PromoTextBottom/>
      <PromoWithIcon/>
      <PromoTh/>
      <Accessories data={allStrapiAccessories}/>
      <SliderPromoSlider/>
      <SliderInstagram/>
      <Accordion/>
      <Delivery/>
      <CommunicationButton/>
      <Footer/>
    </div>
  )
}

export default HomePage


