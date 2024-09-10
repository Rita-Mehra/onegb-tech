import styled from "@emotion/styled";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


import {Colors} from "../../../styles/theme";
import { Avatar, Box,Container} from "@mui/material";

export const StyledBox = styled(Box)(({theme})=>({
    minHeight:"300px",
    background:Colors.darkBlack,
    width:"100%",
    // marginBottom:"50px",
    [theme.breakpoints.down("md")]:{
      minHeight:"200px"
    }
}))

export const StyledContainer = styled(Container)(({theme})=>({
    minHeight:"300px",
    background:Colors.darkBlack,
    display:"flex",
    alignItems:"center",
    width:"80%",
    // border:"1px solid red",
    justifyContent:"space-between",
    [theme.breakpoints.down("lg")]:{
     width:"100%",

    },
    
    [theme.breakpoints.down("md")]:{
      flexDirection:"column",
      minHeight:"200px",

    }
    

}))

export const TextBox = styled(Box)(({theme})=>({
   minWidth:"350px",
    background:Colors.darkBlack,
    [theme.breakpoints.down("md")]:{
      minWidth:"320px",
      // border:"1px solid red",
      '& p': {
        textAlign:'center'
       },
      '& h6': {
       textAlign:'center'
      }

    }

}))

export const IconsBox = styled(Box)(({theme})=>({
   minWidth:"600px",
    background:Colors.darkBlack,
    display:"flex",
    // border:"1px solid red",
    justifyContent:"space-evenly",

    [theme.breakpoints.down("lg")]:{
      minWidth:"400px",
      gap:"30px"

     

    },
    [theme.breakpoints.down("sm")]:{
      minWidth:"320px",
      flexWrap:"wrap",
      justifyContent:"center",
      gap:"30px"

    }
}))

export const IconsAvatar = styled(Avatar)(({theme})=>({
   minWidth:"80px",
   minHeight:"80px",
   background:Colors.lightblack,
   '& img':{
    width:"30px",
    height:"40px",
    imageRendering: "pixelated"

   },
   [theme.breakpoints.down("sm")]:{
    minWidth:"50px",
    minHeight:"50px",
    '& img':{
      width:"20px",
      height:"30px"
     },

   }

 }))

 export const AvatarBox = styled(Box)(()=>({
   display:"flex",
   flexDirection:"column",
   alignItems:"center"
  }))
 

   export const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: Colors.primaryLite,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: Colors.primaryLite,
      color: Colors.darkBlack,
    },
  }));

