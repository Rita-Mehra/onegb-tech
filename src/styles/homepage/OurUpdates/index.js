import {styled} from "@mui/material/styles";
import { Container,Box, Stack } from "@mui/material";
export const StyledContainer = styled(Container)(({theme})=>({
    // border:"1px solid red",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    minHeight:"600px",
    [theme.breakpoints.down("md")]:{
        minHeight:"1600px"
    }

    
   

}))

export const StyledBox = styled(Stack)(({theme})=>({
    // border:"1px solid red",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"85%",
    gap:"25px",
    [theme.breakpoints.down("lg")]:{
        // flexDirection:"column",
        // gap:"10px",
        width:"100%",
    },
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        gap:"10px",
        width:"100%",
    }


   

}))


