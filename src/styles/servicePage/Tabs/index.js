import { styled } from "@mui/material/styles";
import {Colors} from "../../theme";
import { Box } from "@mui/material";
import { TabPanel } from '@mui/lab';

export const TabSection = styled(Box)(()=>({
    // border:"1px solid red",
   minHeight:"500px"
}))
export const TabsBox = styled(Box)(({theme})=>({
    // border:"1px solid red",
    background:Colors.darkBlack,
    display:"flex",
    justifyContent:"center",
    [theme.breakpoints.down("md")]:{
        justifyContent:"flex-start",
             }
}))
export const ImageBox = styled(Box)(({theme})=>({
    // border:"1px solid red",
    minHeight:"300px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
   
   

}))
export const StyledTabPanel = styled(TabPanel)(({theme})=>({
    minHeight:"100px",
    minWidth:"100px",
  
    '& img':{
       
        width:"800px",
        height:"500px",
       
    },
    [theme.breakpoints.down("md")]:{
        padding:"0",
        '& img':{
            // height:"200px",
            minHeight:"200px",
            minWidth:"320px",
            maxHeight:"400px",
            maxWidth:"500px",
        // width:"320px",
        objectFit:"contain",
        width:"100%",
        height:"100%"
         
        },  
    }

}))
