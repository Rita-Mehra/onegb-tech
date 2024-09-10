import React from 'react';
import Image from 'next/image';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import {Colors} from "../../../styles/theme";
import Trust from "../../../Assets/Trust.png";
import Dedication from "../../../Assets/Dedication.png";
import Perseverance from "../../../Assets/Perseverence.png";
import Curiosity from "../../../Assets/Curosity.png";
import Knowledge from "../../../Assets/Knowledge.png";

import {Typography,IconButton,Avatar,Box,Tooltip } from '@mui/material';
import {StyledBox,StyledContainer,TextBox,IconsBox,IconsAvatar,AvatarBox,StyledTooltip} from "../../../styles/aboutusPage/CoreValue";

 

const index = () => {
    const iconsArr= [{id:1, img:Trust, tooltip:"Building strong relationships through mutual respect and reliability.",value:"Trust"},
    {id:2, img:Dedication, tooltip:"Commitment to achieving goals and delivering excellence in every endeavor.", value:"Dedication"},
    {id:3, img:Perseverance, tooltip:"The determination to overcome challenges and keep moving forward, no matter the obstacles.",value:"Perseverance"},
    {id:4, img:Curiosity, tooltip:"An eagerness to explore, learn, and discover new ideas and perspectives.",value:"Curiosity"},
    {id:5, img:Knowledge, tooltip:"The foundation of informed decision-making and continuous personal and professional growth.",value:"Knowledge"}]

    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
   <StyledBox>
    <StyledContainer maxWidth="xl">
        <TextBox>
            <Typography variant="body2" sx={{
                fontSize:"14px",
                color:Colors.primary
            }} >Core Values</Typography>
            <Typography variant="h6" >
            OneGB Tech {!matches && <br />}
values of a healthy team  {!matches && <br />}
and culture
            </Typography>
        </TextBox>
        <IconsBox>{
            iconsArr.map((item)=>(
                <StyledTooltip title={item.tooltip} arrow>
                <AvatarBox>

              
                

                <IconsAvatar >
                    <Image src={item.img} alt="img"/>
                </IconsAvatar>
              
           
            <Typography variant="body2" component="span" >{item.value}</Typography>
            </AvatarBox>
            </StyledTooltip>
           
            ))
            }
           
        </IconsBox>
    </StyledContainer>

   </StyledBox>
  )
}

export default index
