import React from 'react';
import { useRouter } from 'next/router';
import { styled } from "@mui/material/styles";
import {Colors} from "../../styles/theme"
import {Box,Typography,Divider }from '@mui/material';

const StyledBox = styled(Box)(({theme})=>({
  width:"100%",
  minHeight:"120px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  // border:"1px solid red",
  [theme.breakpoints.down("sm")]:{
   minHeight:"80px"
  
  
   }
}))

const ContentBox = styled(Box)(({theme})=>({
 minWidth:"400px",
//  border:"1px solid red",
 padding:"10px",
 display:"flex",
 background:Colors.darkBlack,
 color:Colors.white,
 gap:"15px",
 borderRadius:"30px",
 alignItems:"center",
 [theme.breakpoints.down("sm")]:{
  minWidth:"280px",


 }
}))


const index = () => {
  const route = useRouter();
  console.log(route);
  const pathname =route.asPath.split("/")
  console.log(pathname)
  return (
   <StyledBox>
    <ContentBox>
      <Typography variant="body1" sx={{width:"50%", textAlign:"right", color:Colors.textColor, textTransform:"uppercase"}}>{pathname.length===3?pathname[1]:"HOME"}</Typography>
      <Divider  orientation="vertical" flexItem sx={{background:Colors.white}}/>
      <Typography variant="body1"  sx={{width:"50%", textTransform:"uppercase"}}>{pathname.length===3?pathname[2]:pathname[1]}</Typography>
    </ContentBox>
   </StyledBox>
  )
}

export default index
