import React,{useRef} from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Colors} from "../../../styles/theme";
import {Typography,Avatar} from '@mui/material'
import Lakshay from "../../../Assets/Lakshay.jpg";
import GurwantBrar from "../../../Assets/Gurwant.jpg";
import Aman from "../../../Assets/Aman.jpg";

import {LeadersContainer,Heading,ImageBox,PartnersBox,PartnerAvatar,MainBox,MainAvatar} from "../../../styles/aboutusPage/Leaders";

const index = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    initialSlide: 0,
    slidesToScroll: 1,

    autoplay: true,
    dots: true,
    arrows : false,
  };
  const arrowRef = useRef(null);
  return (
    <LeadersContainer>
       <Heading variant="h1" style={{ marginBottom: "20px",  textAlign:"center" }}>THE LEADERS</Heading>
       {/* <ImageBox > */}
       <Slider ref={arrowRef} {...settings} >

        <PartnersBox>
          <PartnerAvatar alt="img" src={GurwantBrar.src}   />
          <Typography variant="body1">
          Gurwant Brar
          </Typography>
          <Typography variant="body2" sx={{color:Colors.primary, fontWeight:"500"}}>
          FOUNDER and CEO
          </Typography>
        </PartnersBox>

        {/* <MainBox>
          <MainAvatar src={Archit.src} alt="img"variant="square"></MainAvatar>
          <Typography variant="body1" >
          Archit Tiwari
          </Typography>
          <Typography variant="body2"sx={{color:Colors.primary, fontWeight:"500"}} >
          CO-FOUNDER
          </Typography>
        </MainBox> */}
        <PartnersBox className='project'>
      
       
      <PartnerAvatar alt="img" src={Lakshay.src}   />
      <Typography variant="body1" >
      Lakshay Rajput
      </Typography>
      <Typography variant="body2" sx={{color:Colors.primary, fontWeight:"500"}}>
      CO-FOUNDER and CBO
      </Typography>
    </PartnersBox>

        <PartnersBox>
          <PartnerAvatar src={Aman.src} alt="img"/>
          <Typography variant="body1" >
          Aman Yadav
          </Typography>
          <Typography variant="body2" sx={{color:Colors.primary, fontWeight:"500"}}>
          CO-FOUNDER and Marketing Manager
          </Typography>
        </PartnersBox>
        </Slider>
       {/* </ImageBox> */}
        {/* <div className="slider-container" style={{border:"1px solid blue", width:"80%", margin:"auto"}}>
      <Slider {...settings}  style={{border:"1px solid blue"}}>
      <div sx={{border:"1px solid white"}}>
          <h3>1</h3>
        </div>
        <div style={{border:"1px solid pink"}}>
          <h3>2</h3>
        </div>
        <div style={{border:"1px solid pink"}}>
          <h3>3</h3>
        </div>
        <div style={{border:"1px solid pink"}}>
          <h3>4</h3>
        </div >
        <div style={{border:"1px solid pink"}}>
          <h3>5</h3>
        </div>
        <div style={{border:"1px solid pink"}}>
          <h3>6</h3>
        </div>
      </Slider>
    </div> */}
      
    </LeadersContainer>
  )
}

export default index
