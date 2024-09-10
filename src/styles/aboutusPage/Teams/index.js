import styled from "@emotion/styled";
import { Container,Box } from "@mui/material";
export const TeamsContainer = styled(Container)(({theme})=>({
    // width:"80%",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    marginBottom:"50px",
    [theme.breakpoints.down("md")]:{
       
  
      }
      

}))

export const CardsBox = styled(Box)(({theme})=>({
    width:"80%",
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    gap:"20px",

    [theme.breakpoints.down("lg")]:{
      
        width:"100%"

    },

    [theme.breakpoints.down("md")]:{
        gridTemplateColumns:"1fr 1fr",
        // border:"1px solid red",
        width:"100%"

    },
    [theme.breakpoints.down("sm")]:{
        gridTemplateColumns:"1fr",
        // border:"1px solid red",
        width:"100%"

    }

}))