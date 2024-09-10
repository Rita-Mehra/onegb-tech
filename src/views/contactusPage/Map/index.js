import React from 'react';
import styled from "@emotion/styled";
import { Colors } from "../../../styles/theme"
import Contactbg from "../../../Assets/Contactbg.png";
import { Box, Container, Typography, Card, CardHeader, Avatar } from '@mui/material';
import {
  Email,


  Call,
  LocationOn

} from '@mui/icons-material';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "300px",
  // border:"1px solid red",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  }


}))

const AddressBox = styled(Box)(({ theme }) => ({
  minHeight: "300px",
  // border:"1px solid red",
  width: "50%",
  background: `url(${Contactbg.src})`,
  backgroundSize: "100% 350px",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
  
    justifyContent: "flex-start",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "flex-start",
  }




}))

const WrapperBox = styled(Box)(({ theme }) => ({
  width: "60%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
   
  },
 
  //   border:"1px solid red"





}))

const MapBox = styled(Box)(({theme}) => ({
  minHeight: "300px",
  // border:"1px solid red",
  width: "50%",
  [theme.breakpoints.down("sm")]:{
    width:"100%"
  }



}))

const ContactDetail = styled(Box)(({ theme }) => ({





}))

const StyledCard = styled(Card)((props) => ({
  background: "transparent",
  display: "flex",
  minWidth: props.width,
  boxShadow: "none"


}))

const index = () => {
  const contactArr = [
    {
      id: 1,
      img: Call,
      heading: "Call Us",
      subHeading: "+91 9467474099",
      width: "200px"
    },
    {
      id: 2,
      img: Email,
      heading: "Mail us",
      subHeading: "info@1gbtech.com",
      width: "300px"

    },
    {
      id: 3,
      img: LocationOn,
      heading: "Find us",
      subHeading: "Floor 6th, MM Tower, Cube 8, above Passport Seva Kendra, Phase-4, Sector 18, Gurugram, Shahpur, Haryana 122002, INDIA",
      width: "auto"
    }
  ]
  return (
    <StyledBox>
      <AddressBox>
        <WrapperBox>
          <Typography variant="h6" sx={{ textAlign: { xs: "center", sm: "left" } }}>
            Talk With the OneGB Tech
            Team directly.
          </Typography>

          <ContactDetail>
            {
              contactArr.map((i) => (
                <StyledCard key={i.id} width={i.width}>
                  <CardHeader
                    avatar={
                      <Avatar style={{ background: Colors.font }}>
                        <i.img style={{ color: Colors.white }} />
                      </Avatar>
                    }




                    subheader={<Typography variant="body2" sx={{ color: Colors.white }}>{i.subHeading}</Typography>}

                  />
                </StyledCard>
              ))
            }

          </ContactDetail>
        </WrapperBox>

      </AddressBox>
      <MapBox>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.617572097597!2d77.07391642034052!3d28.491061579663146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193a2a825ec3%3A0x3a9037d0c220fe1c!2sCube8%20Coworking%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1713522407880!5m2!1sen!2sin" width="100%" height="350px" sx={{ border: "transparent" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </MapBox>

    </StyledBox>
  )
}

export default index
