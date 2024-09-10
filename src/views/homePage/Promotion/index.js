import React from 'react';
import Image from 'next/image';
import SectionHeading from "../../../components/SectionsHeading";
import PromotionImg from "../../../Assets/Promotion.png";
import BandBaja from "../../../Assets/BandBaja.png";
import Vedayuu from "../../../Assets/Vedayuu.png";
import UmeedEvents from "../../../Assets/UmeedEvents.png";
import Tosy from "../../../Assets/Tosy.png";


import {  CardMedia } from '@mui/material';
import { StyledStack,  ImageBox, Info,OurClients,StyledCard } from "../../../styles/homepage/Promotion";



const index = () => {
  const arr = [BandBaja ,  Vedayuu ,  UmeedEvents ,  Tosy,BandBaja,Vedayuu,UmeedEvents,Tosy ];
  return (

    <StyledStack >
      <SectionHeading 
      mainHeading="Introduction To Best" 
      subheading=" Digital Agency!" 
      description="A best-in-class digital agency serves as a strategic partner, helping businesses navigate the complexities of online marketing, branding, and technology."
      />
     
      <ImageBox>
        <Image src={PromotionImg} alt="img" />
      </ImageBox>
      <OurClients aria-label="card-container">
        {
          arr.map((i,index)=>(
            <StyledCard aria-label='our-clients' key={index}>
         
            <CardMedia  component="img" image={i.src}  alt="img" />
          
        </StyledCard>
          ))
        }
       
       

      </OurClients>


    </StyledStack>
  )
}

export default index
