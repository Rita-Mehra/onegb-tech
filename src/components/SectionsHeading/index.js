import React from 'react';
import {styled} from "@mui/material/styles";
import { Colors } from "../../styles/theme";
import { Stack,Typography } from '@mui/material';


 const StyledStack = styled(Stack)(({theme})=>({
    alignItems:"center",
    marginBottom:"20px",
    [theme.breakpoints.down("sm")]:{
      marginBottom:"0"
    }
  
  }))

  const MainTypography = styled(Typography)(()=>({
  
  }))
 const TypographyStyle = styled(Typography)(()=>({
    color:Colors.primary,
}))

 const Info = styled(Typography)((props)=>({
    // maxWidth:"500px",
    maxWidth: props.parawidth ? props.parawidth : "500px", 
    width:"100%",
    textAlign:"center",
    marginTop:"20px",
    // padding:"0px 35px"
     padding:"0px 10px"
  }));


const index = (props) => {
  return (
    <StyledStack>
      <MainTypography variant='h6'>
       {props.mainHeading}

      </MainTypography>
      <TypographyStyle variant="h6" > {props.subheading}</TypographyStyle>
      <Info variant="body2" parawidth={props.parawidth}>{props.description}</Info>
    </StyledStack>
  )
}

export default index
