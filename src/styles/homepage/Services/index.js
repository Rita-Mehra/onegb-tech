
import {styled} from "@mui/material/styles";
import { Stack, Typography,Box,Button } from "@mui/material";
import ServiceBg from "../../../Assets/ServiceBg.png";
import {Colors}from "../../../styles/theme";
import { BorderBottom } from "@mui/icons-material";


export const ServiceStack = styled(Box)(()=>({
    width:"100%",
    minHeight:"650px",
    background:`url(${ServiceBg.src})`,
    backgroundRepeat:"no-repeat",
  
    backgroundSize:"100% 350px",
    
   
    // border:"1px solid red",
   


  
  





}))
export const ServicesHeading= styled(Typography)(()=>({
    fontFamily:"Oswald, sans-serif",
    color:Colors.font,
   



}))
export const ButtonBox = styled(Box)(()=>({
    display:"flex",
    justifyContent:"center",
    marginTop:"20px"

}))
export const ButtonBoxInner= styled("div")(()=>({
    borderBottom:`2px solid ${Colors.primary} `,
    // border:"1px solid red"
    padding:"0px 10px"
}))
export const StyledButton = styled(Button)(()=>({
    color:Colors.white,

  

}))