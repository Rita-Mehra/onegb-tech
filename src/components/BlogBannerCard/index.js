import React from 'react';
import styled from "@emotion/styled";
import {Colors} from "../../styles/theme"
import BlogBanner from "../../Assets/BlogBanner.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container, Typography,Box } from '@mui/material';

const StyledContainer = styled(Container)(({theme})=>({

background: `rgba(0, 0, 0, 0.5) url(${BlogBanner.src})`,
minHeight:"300px",
backgroundSize:"100% 300px",
backgroundRepeat:"no-repeat",
width:"80%",
display:"flex",
alignItems:"flex-end",
imageRendering: "pixelated",
imageRendering: "-webkit-optimize-contrast",

[theme.breakpoints.down("md")]:{
  width:"100%",
  backgroundSize:"100% 300px",
  minHeight:"300px",


 },
[theme.breakpoints.down("sm")]:{
  width:"100%",
  backgroundSize:"100% 200px",
  minHeight:"200px",


 }


}))

const TextBox = styled(Box)(({theme})=>({

 minWidth:"600px",
 [theme.breakpoints.down("sm")]:{
  minWidth:"300px",


 }
  }))

const index = () => {
  return (
    <StyledContainer maxWidth="xl">
      <TextBox>
        <Typography variant="subtitle1" component="span" color="initial" sx={{background:Colors.primary, borderRadius:"5px", padding:"2px", marginBottom:"10px"}}>
        Technology
        </Typography>
        <Typography variant="h3" sx={{textWrap:{sm:"wrap"}}}>The Impact of Technology on the Workplace: <br />
How Technology is Changing</Typography>

<Typography variant="body2"sx={{display:"flex"}}>
<Box component="span"><AccountCircleIcon /></Box>&nbsp;&nbsp;
  Krupa Amreliya &nbsp;&nbsp;&nbsp;&nbsp; August 20, 2023</Typography>
      </TextBox>
      
    </StyledContainer>
  )
}

export default index
