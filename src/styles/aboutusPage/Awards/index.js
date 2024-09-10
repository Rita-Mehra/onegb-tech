import styled from "@emotion/styled";
import {Colors} from "../../../styles/theme";
import { Container,Box } from "@mui/material";

export const AwardsContainer = styled(Container)(({theme})=>({
    width:"80%",
    minHeight:"500px",
    marginBottom:"50px",
    [theme.breakpoints.down("md")]:{
      
      width:"100%"

  },
   //  border:"1px solid red"

}))
export const AwardCover = styled(Box)(({theme})=>({
   width:"149px",
   height:"149px",
   // border:"1px solid red",
   background:Colors.darkBlack,
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 borderRadius:"10px",
   '& img':{
    width:"100px",
    height:"100px",
    objectFit:"contain",
    filter: "grayscale(100%)",
   },
   '&:hover img': {
      filter: "grayscale(0%)", 
   },

   '&:hover': {
      border: `0.5px solid ${Colors.primary}`,
      transform:`scale(1.10)`
   },
   [theme.breakpoints.down("sm")]:{
      width:"80px",
   height:"80px",
   '& img':{
      width:"50px",
      height:"50px",
     
     },
     

  },

 
}))

export const AwardBox = styled(Box)(()=>({
   minHeight:"200px",
   width:"100%",
   display:"flex",
   justifyContent:"center",
   flexWrap:"wrap",
   gap:"20px",
   // border:"1px solid red"

}))

export const ButtonCover = styled(Box)(()=>({
  
   // border:"1px solid red",
  display:"flex",
  justifyContent:"center",
  marginTop:"30px"

}))

