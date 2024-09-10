import { styled } from "@mui/material/styles";
import { Container,Box } from "@mui/material";
import {Colors} from "../../theme";
import { TabPanel,TabContext } from "@mui/lab";
export const PortfolioContainer = styled(Container)(({theme})=>({
    [theme.breakpoints.down("md")]:{
        padding:"0"
             }
}))

export const TabsBox = styled(Box)(({theme})=>({
    // border:"1px solid red",
    background:Colors.darkBlack,
    display:"flex",
    justifyContent:"center",
    margin:"50px 0px",

    [theme.breakpoints.down("md")]:{
       
             },
    [theme.breakpoints.down("sm")]:{
        justifyContent:"flex-start",
        margin:"20px 0px"
             }
}))

export const StyledTabPanel = styled(TabPanel)(({theme})=>({
   
    [theme.breakpoints.down("md")]:{
       width:"100%",
       padding:"0"
             }
}))

export const StyledTabContext = styled(TabContext)(()=>({
   
   
}))