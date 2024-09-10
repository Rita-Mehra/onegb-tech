import {styled} from "@mui/material/styles";
import {Colors} from "../theme";
import { Box,Container,Card,CardContent, Typography, } from "@mui/material";
import { Opacity } from "@mui/icons-material";
import LaunchIcon from '@mui/icons-material/Launch';
// import zIndex from "@mui/material/styles/zIndex";


export const ServiceBox = styled(Box)(({degree, length,theme})=>({
   //  border:"1px solid red",
    minHeight:`${length}`,
    backgroundImage:`linear-gradient(${degree || "170"}deg, ${Colors.font} 59%, transparent 50%)`,
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.down("lg")]:{
      marginBottom:"20px"
    

    }
    

}))
export const ServiceContainer = styled(Container)(({direction,theme})=>({
   
   //  border:"1px solid red",
    display:"flex",
    minHeight:"300px",
    justifyContent:"space-between",
    gap:"50px",
    flexDirection: direction ? direction :"row",
    [theme.breakpoints.down("lg")]:{
      flexDirection:"column"

    },
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column"

    }

   
    


 
 }))
export const TextBox = styled(Box)(({theme})=>({
   minWidth:"400px",
   width:"100%",
   [theme.breakpoints.down("md")]:{
      minWidth:"280px"
   }

 

//    border:"1px solid blue"

}))

export const StyledTypography = styled(Typography)(()=>({
   fontFamily:"Oswald",
   textTransform: "uppercase"
 
 }))
export const ImagesBox = styled(Box)(({theme})=>({
    minWidth:"600px",
    width:"100%",
    // border:"1px solid red",
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    gap:"10px",
    [theme.breakpoints.down("sm")]:{
      minWidth:"280px",

      gridTemplateColumns:"1fr 1fr ",
   }
 
 }))

 export const ServiceCard = styled(Card)(({theme})=>({
    minWidth:"150px",
    minHeight:"150px",
    background:`rgba(255,255,255,0.1)`,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:Colors.white,
    position:"relative",
    // cursor:"pointer",
    // '&:before':{
    //   // content: `"View More"{$</LaunchIcon>}`,
    //   content: `""`,
    //   position:"absolute",
    //   top:"0",
    //   left:"0",
     
    //   width:"100%",
    //   height:"100%",
    
    //   zIndex:"2",
    //   transition:"0.2s ease-in",
    //   opacity: 0,
    // },
    // '&:hover:before':{  
    //   content: `""`,    
     
    //   zIndex:"1",
    //   background:`rgba(251, 110, 59,0.8 )`,
    //   transition:"0.2s all",
    //   opacity: 1,

    //   // background: `rgba(${Colors.primaryLite}, 0.5)`,
   
    // },
    [theme.breakpoints.down("sm")]:{
      minWidth:"100px",
      minHeight:"100px",
      

   }
  

   
 
 }))

 export const ViewMore = styled(Box)(()=>({
  position:'absolute',
  position:"absolute",
      top:"0",
      left:"0",
     
      width:"100%",
      height:"100%",
    
      zIndex:"2",
      transition:"0.2s ease-in",
      fontFamily:"Poppins,sans-serif",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      opacity: 0,
      "& >a":{
        color:Colors.white,
        textDecoration:"none",

      },
      '&:hover':{  
      
       
        zIndex:"1",
        background:`rgba(251, 110, 59,1 )`,
        transition:"0.2s all",
        opacity: 1,
  
        // background: `rgba(${Colors.primaryLite}, 0.5)`,
     
      },

 

 

}))


 export const CardContentStyle = styled(CardContent)(()=>({
    // border:"1px solid blue",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    minHeight:"100px",
    minWidth:"100px"

   
 
 }))

 export const ImageWrap = styled(Box)(()=>({
   //  maxWidth:"70px",
    
   //  maxHeight:"70px",
   //  // border:'1px solid red',
    '& img':{
        width:"50px",
        height:"50px",
       
        objectFit: "contain",
       
    }
   
 
 }))

 export const IconsName = styled(Typography)(()=>({
  fontFamily:"Poppins,sans-serif",
  textAlign:"center",
//   border:"1px solid pink",
  lineHeight:"17px ",
  minWidth:"50px",
  textWrap:'wrap',
  marginTop:"10px"
       

    }
   
 
 ))




