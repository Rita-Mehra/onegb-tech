import { styled } from "@mui/material/styles";
import { Container,Stack } from "@mui/material";
import {Colors} from "../../theme";

export const ProcessStack=styled(Stack)(({theme})=>({
   minHeight:"600px",
//    border:"1px solid red",
   background:Colors.darkBlack,
   display:"flex",
   justifyContent:"center",
   [theme.breakpoints.down("sm")]:{
   marginBottom:"30px",
minHeight:"1700px",

    // border:"1px solid red",
   }

  
  

}))

export const ProcessContainer=styled(Container)(({theme})=>({
    display:"flex",
   
    justifyContent:"space-between",
    [theme.breakpoints.down("lg")]:{
       gap:"10px"
        
 
       
 
     },
    [theme.breakpoints.down("md")]:{
       display:"grid",
      gridTemplateColumns:"1fr 1fr",
      gap:"15px"
    //    border:"1px solid red",
       

      

    },
    [theme.breakpoints.down("sm")]:{
        // border:"1px solid red",
        display:"flex",
        flexDirection:"column",
      justifyContent:"center",
        gap:"15px",
        // alignItems:"center"
       
       

      

    }
  

}))