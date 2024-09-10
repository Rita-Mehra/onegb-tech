import React from 'react';
import SectionsHeading from "../../../components/SectionsHeading";
import { Box,CardMedia } from '@mui/material';
import UmeedEvents from "../../../Assets/UmeedEvents.png";
import BandBaja from "../../../Assets/BandBaja.png";
import Vedayuu from "../../../Assets/Vedayuu.png";
import Tosy from "../../../Assets/Tosy.png";

import {OurClients,StyledCard} from "../../../styles/aboutusPage/Partners";


const index = () => {
    const arr=[UmeedEvents,BandBaja,Vedayuu,Tosy,UmeedEvents,BandBaja,Vedayuu,Tosy,UmeedEvents,BandBaja,Vedayuu,Tosy,]
  return (
    <Box>
        <SectionsHeading mainHeading="Partners & Alliances" description="A skilled software development team is the most vital part of the success of any business. And we put together the best professionals!"/>

        <OurClients aria-label="card-container">
        {
          arr.map((i,index)=>(
            <StyledCard aria-label='our-clients' key={index}>
         
            <CardMedia  component="img" image={i.src}  alt="img" />
          
        </StyledCard>
          ))
        }
       
       

      </OurClients>
      

      
    </Box>
  )
}

export default index
