import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Colors} from "../../styles/theme"; 
import Logo from "../../../public/images/onegb-logo.svg";
import { Box, Typography, Avatar,Card,CardHeader,Divider } from '@mui/material';
import {
  Email,
  X,
  LinkedIn,
  Instagram,
  Facebook,
  Call,
  LocationOn

} from '@mui/icons-material';

import { StyledBox, StyledConatiner, StyledStack, ConnectionBox, ContactTypography, AvatarBox,StyledAvatar,ContactDetail,StyledCard,StyledDivider,ImageBox } from "../../styles/Footer";



const index = () => {
  const arr = [ { id: 2, icon: Facebook, color: Colors.info, link:"https://www.facebook.com/themagiicians/"}, { id: 3, icon: Instagram, color: Colors.primary,  link:"https://www.instagram.com/magiicians?igsh=MndtOTV3YTRlOTU2" }, { id: 4, icon: LinkedIn, color: Colors.warning,  link:"https://www.linkedin.com/company/the-magiicians/?originalSubdomain=in" },{ id: 5, icon: X, color: Colors.secondary,  link:"https://twitter.com/magiicians" }]

  const contactArr=[
    {
    id:1,
    img:Call,
    heading:"Call Us",
    subHeading:"+91 9467474099",
    width:"200px"
  },
  {
    id:2,
    img:Email,
    heading:"Mail us",
    subHeading:"info@1gbtech.com  ",
    width:"300px"

  },
  {
    id:3,
    img:LocationOn,
    heading:"Find us",
    subHeading:"Floor 6th, MM Tower, Cube 8, above Passport Seva Kendra, Phase-4, Sector 18, Gurugram, Shahpur, Haryana 122002, INDIA",
    width:"auto"
  }
]
  return (
    <StyledBox>
      <StyledConatiner>
        <ImageBox>
          <Image src={Logo} height={110} width={110} alt="img" />
        </ImageBox>
        <ConnectionBox>
          <ContactTypography variant="h2" component="span" >CONNECT WITH US</ContactTypography>

          {/* <AvatarBox>
            {
              arr.map((i) => (
                <Link href={i.link} key={i.id}  target = '_blank'>
                i.link && <Link href={i.link} key={i.id}>
                  <StyledAvatar style={{ background: i.color }} >
                  {i.icon && <i.icon  sx={{ fontSize: '14px' }} />}


                  </StyledAvatar>
                </Link>
              ))
            }
          </AvatarBox> */}

        </ConnectionBox>
        <ContactDetail>
          {
            contactArr.map((i)=>(
              <StyledCard key={i.id}  width={i.width}>
              <CardHeader
            avatar={
               <Avatar   style={{background:Colors.font}}>
                 <i.img style={{color:Colors.darkBlack}} />
               </Avatar>
            }
           
            title={ <Box>
            <Typography variant="body1" sx={{ color: Colors.white }}>{i.heading}</Typography> 
            <StyledDivider  sx={{ borderColor: Colors.primary, width:"50px border" }} />
            </Box>

          }
          

            subheader={<Typography variant="body2" sx={{ color: Colors.white }}>{i.subHeading}</Typography>}

          />
              </StyledCard>
            ))
          }
         
        </ContactDetail>
      </StyledConatiner>



    </StyledBox>
  )
}

export default index
