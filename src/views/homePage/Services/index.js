//'use client';
import React, {useRef} from 'react';
import { useRouter } from 'next/navigation'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack, Typography, Box,Button } from '@mui/material';
import { ServiceStack, ServicesHeading,ButtonBox,StyledButton,ButtonBoxInner } from "../../../styles/homepage/Services";
import ServiceCard from "../../../components/ServiceCard";
import CustomDevelop from "../../../Assets/CustomDevelop.png";
import GoogleAds from "../../../Assets/GoogleAds.png";
import Seo from "../../../Assets/Seo.png";
import EcommerceMarketing from "../../../Assets/EcommerceMarketing.png";
import { StackedBarChartSharp } from '@mui/icons-material';



const index = () => {
  const router = useRouter()
  const arr = [{ img: CustomDevelop, serviceName: "Custom Theme Development", serviceDescription: "We provide full-stack mobile application development services which include app development on..." },

   { img: GoogleAds, serviceName: "Google Ads", serviceDescription: "we manage your Google Ads (previously Google AdWords) account, targeting the keywords that will drive..." },

    { img: Seo, serviceName: "SEO", serviceDescription: "Indeed search engine optimization (SEO) is no longer an option to think more about business growth..." },
    
    { img: EcommerceMarketing, serviceName: "Ecommerce Marketing", serviceDescription: "From startups to large corporations, eCommerce marketing offers flexible solutions for both business owners and..." }]

    var settings = {
      className: "center",
      centerMode: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3.64,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows : false,
      autoplay: true,
      autoplaySpeed: 2000,
      swipeToSlide: true,
    
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode : false
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2.30,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode : false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            centerMode : false
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode : false
          }
        }
      ]
    };

    const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = arr.map((item, i) => (
        <ServiceCard img={item.img} serviceName= {item.serviceName} serviceDescription={item.serviceDescription} key={i}/>
    ))
  return (
   
    <ServiceStack>
   
      <ServicesHeading variant="h1" style={{ marginBottom: "20px", marginTop: "20px", textAlign:"center" }}>SERVICES</ServicesHeading>
    
      <Slider ref={arrowRef} {...settings}>
    {sliderProject}
    </Slider>
    <ButtonBox>
      <ButtonBoxInner component="div">

    <StyledButton variant='text'  onClick={() => router.push('/services')}> view all</StyledButton>
      </ButtonBoxInner>

    </ButtonBox>

      

    </ServiceStack>
   
  )
}
// 
export default index
