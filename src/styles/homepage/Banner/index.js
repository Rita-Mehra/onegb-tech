import {styled} from "@mui/material/styles";
import {Colors} from "../../theme";
import Link from "next/link";
import BannerBg from "../../../Assets/Bannerbgs.png";
import {Box, Typography,Stack} from "@mui/material";

export const Heading = styled(Stack)(({theme})=>({
  alignItems:"center",
//   minHeight:"581px",
minHeight:"648px",
  width:"100%",
//   backgroundImage: `url(${BannerBg.src})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize:"cover",
//   backgroundPosition:"center",
  display:"flex",
//   backgroundSize:"100% 648px",
//   justifyContent:"center",
justifyContent:"space-between",
//   border:"1px solid red",
  
  [theme.breakpoints.down("md")]:{
   // border:"1px solid blue",
   justifyContent:"flexStart",
   minHeight:"480px",
   height:"100%"
  }
}))
export const HeadingTextBox=styled(Box)(()=>({
   textAlign:"center",
   marginTop:"20px",
   // marginBottom:"50px",


}))

export const StyledTypographyMain= styled(Typography)(({theme})=>({
//   fontWeight:500,
  lineHeight:"35px",
  [theme.breakpoints.down("md")]:{
   // border:"1px solid red",
   textAlign:"center",
  }

}))

export const StyledTypography= styled(StyledTypographyMain)(()=>({
   color:Colors.info
}))

export const StyledLink = styled(Link)(()=>({
   color:Colors.white,
   fontFamily:"Poppins,sans-serif",
   fontSize:"12px",

}))
export const ImageBox = styled(Box)(({theme})=>({  
   // minHeight:"400px",
   minHeight:"452px",
   width:"100%",
   position:"relative",
   display:"flex",
   justifyContent:"center",
   flexDirection:"column", 
   alignItems:"center",
   // border:"1px solid yellow",
   [theme.breakpoints.down("md")]:{
      
      width:"100%",
      minWidth:"300px",
      minHeight:"350px",
      height:"100%",
      // border:"1px solid yellow",

      '& img':{
         width:"100%",
         height:"100%",
         objectFit:"contain"

      }


   }


}))

export const ImageWrap = styled(Box)(({theme})=>({
   // minWidth:"400px",
   // width:"100%",
   minHeight:"200px",
   position:"absolute",
   // top:"5%",
   top:"17%",
   zIndex:2,
   display:"flex",
   justifyContent:"center",
   // border:"1px solid red",

   [theme.breakpoints.down("md")]:{
     maxWidth:"250px",
     width:"100%",
      minHeight:"100px",
      height:"100%",
      // border:"1px solid white",
      '& img':{
         width:"100%",
         height:"100%",
         objectFit:"contain"

      }


   }

}))

export const ImageBaseWrap = styled(Box)(({theme})=>({  
   position:"absolute",
   bottom:0,
   // border:"1px solid red",
   [theme.breakpoints.down("md")]:{
      maxWidth:"600px",
      // width:"100%",
      
      maxHeight:"50px",
      '& img':{
         width:"100%",
         height:"100%",
         objectFit:"contain"
      }

   }
}))