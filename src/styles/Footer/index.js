import styled from "@emotion/styled";
import FooterBg from "../../Assets/FooterBg.png";
import {Colors} from "../../styles/theme";
import { Stack,Box,Container, Typography, Avatar,Card,Divider } from "@mui/material";


export const StyledBox = styled(Box)(({theme})=>({
    marginTop:"100px",
    backgroundImage: `url(${FooterBg.src})`,
    minHeight:"300px",
   
    backgroundPosition:"center",
    backgroundSize:"100% 300px",
    backgroundRepeat:"no-repeat",
    display:"flex",
    justifyContent:"center",
    [theme.breakpoints.down("md")]:{
        backgroundSize:"100% 554px",   

    }

}))

export const StyledConatiner = styled(Stack)(({theme})=>({
    width:"77%",
    minHeight:"300px",
    
    gap:"10px",
    [theme.breakpoints.down("lg")]:{
        // border:"1px solid red",
        width:"100%",
        padding:"0px 20px"

    },
    [theme.breakpoints.down("md")]:{
        // border:"1px solid red",
        width:"100%"

    }



}))

export const StyledStack = styled(Stack)(()=>({
    width:"100%",
   
  
}))

export const ImageBox= styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]:{
       textAlign:"center"

    }

}))

export const ConnectionBox = styled(Box)(({theme})=>({
    display:"flex",
   
    justifyContent:"space-between",
    alignItems:"flex-end",
    [theme.breakpoints.down("md")]:{
        // justifyContent:"flex-start",
        flexWrap:"wrap",
        justifyContent:"center",
    }


}))

export const ContactTypography = styled(Typography)(({theme})=>({
    color:Colors.font,
    fontFamily:"Oswald, sans-serif",
    letterSpacing:"3px",
    display:"inline-block",
    [theme.breakpoints.down("lg")]:{
        letterSpacing:"0.125px",
    }



}))

export const AvatarBox = styled(Box)(()=>({
    display:"flex",
    gap:"3px",
    
  

}))

export const StyledAvatar = styled(Avatar)(()=>({
    width:"50px",
    height:"50px",
    color:Colors.darkBlack,
    fontSize:"2px"
  

}))

export const ContactDetail = styled(Box)(({theme})=>({
    display:"flex",
    [theme.breakpoints.down("md")]:{
        flexDirection:"column"
    }
   
 
  

}))

export const StyledCard = styled(Card)((props)=>({
    background:"transparent",
    display:"flex",
    minWidth:props.width,
    boxShadow:"none"
  
   
}))

export const StyledDivider = styled(Divider)(()=>({
    border:`1.5px solid ${Colors.primary}`,
    width:"50px",
   
}))