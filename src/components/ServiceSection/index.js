import React,{useState} from 'react';
import ComingSoon from "../ComingSoon";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { development } from "../../data/servicesData";
import {Colors} from "../../styles/theme";
import LaunchIcon from '@mui/icons-material/Launch';


import { Typography, Container, Box, CardMedia, CardHeader, Card, CardContent } from '@mui/material';
import Button from "../Button";
import {
  ServiceBox, TextBox, ImagesBox, ServiceContainer,CardContentStyle,ServiceCard,ImageWrap,
  IconsName,StyledTypography,ViewMore

} from "../../styles/ServiceSection";




const index = (props) => {
  console.log(props);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <ServiceBox degree={props.degree} length={props.height}>
      <ServiceContainer direction={props.direction}>
        <TextBox>
          <Typography variant="subtitle1" sx={{color:Colors.primary}} >
            WHAT WE DO
          </Typography>
          <StyledTypography variant="h2"  sx={{marginBottom:"10px", marginLeft:"0"}}>{props.serviceName}</StyledTypography>
          <Typography variant="body2" sx={{marginBottom:"20px"}}>
           {props.serviceDescription}
          </Typography>
          {/* <Button name="VIEW PORTFOLIO" passingprop= {() => router.push('/portfolio')} /> */}

        </TextBox>
        <ImagesBox>
          {
            props.data.map((i) => (
              <ServiceCard key={i.id}>
                <CardContentStyle>
                  <ImageWrap>
                    <Image src={i.imageIcon.src} alt="img" width="100" height="100" ></Image>
                  </ImageWrap>
                  <IconsName variant="subtitle1">{i.iconName}</IconsName>
                  <ViewMore>
                   
                    {/* <Link href="#">*/} <span  onClick={handleOpen} style={{cursor:"pointer"}}> 
                    View More
                    </span>
                   {/* </Link> */}
                 <LaunchIcon/>
                 </ViewMore>
                 </CardContentStyle>
              </ServiceCard>
            ))
          }



        </ImagesBox>
      </ServiceContainer>
      {open && 
      <ComingSoon 
      handleOpen={handleOpen} 
      handleClose={handleClose} 
      open={open}
      />}

    </ServiceBox>
  )
}

export default index
