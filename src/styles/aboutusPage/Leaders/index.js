import styled from "@emotion/styled";
import { Colors } from "../../../styles/theme";
import { Box,Typography,Avatar  } from "@mui/material";
export const LeadersContainer= styled(Box)(({theme})=>({
    backgroundImage:`linear-gradient( 170deg, ${Colors.primaryLite} 59%, transparent 50%)`,
    minHeight:"500px",
    paddingTop:"30px",
    marginBottom:"50px",
[theme.breakpoints.down("md")]:{
    marginBottom:"50px"
}
    // border:"1px solid red",
   
}))

export const Heading= styled(Typography)(()=>({
    fontFamily:"Oswald, sans-serif",
    color:Colors.font,
   



}))

export const ImageBox= styled(Box)(({theme})=>({
    // display:"flex",
    width:"60%",
    border:"1px solid yellow",
    // margin:"auto",
    minHeight:"400px",

   flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    '& > *': { // Selects all direct children elements
        textAlign: "center"
    },
    [theme.breakpoints.down("lg")]:{
        width:"80%",
       

    },
    [theme.breakpoints.down("md")]:{
        width:"100%",
       

    },

    [theme.breakpoints.down("sm")]:{
        width:"100%",
        flexDirection:"column"

    }

    
}))

export const PartnersBox= styled(Box)(()=>({
    display:"flex !important",
    alignItems:"center !important",
    justifyContent:"center !important",
    flexDirection:'column !important',
    // border:"1px solid red",
    minWidth:"200px",
    margin:"10px !important"
    
}))

export const PartnerAvatar= styled(Avatar)(()=>({
    minWidth:"200px",
    minHeight:"200px",
   
    
}))


export const MainBox= styled(PartnersBox)(()=>({
    
}))

export const MainAvatar= styled(Avatar)(()=>({
    minWidth:"280px",
    minHeight:"300px"
    
}))