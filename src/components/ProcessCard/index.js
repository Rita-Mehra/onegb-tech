import React from 'react';
import {Colors} from "../../styles/theme";
import EcommerceMarketing from "../../Assets/EcommerceMarketing.png";
import { Card, CardMedia,CardContent, Typography,Box } from '@mui/material';
import styled from '@emotion/styled';


const ProcessCardStyle = styled(Card)(({theme})=>({
minHeight:"350px",
maxWidth:"250px",
borderRadius:"150px",
background:Colors.primaryLite,
color:Colors.white,
display:"flex",
flexDirection:"column",
justifyContent:"center",
padding:"20px ",

[theme.breakpoints.down("lg")]:{
 minWidth:"200px",
 minHeight:"400px",
 padding:"0px",
},

[theme.breakpoints.down("md")]:{
  margin:"auto"
}



}))

const Header = styled("div")(()=>({
   minHeight:"100px",
   width:"100%",
  
   display:"flex",
   justifyContent:'center',
   alignItems:"center",
    
    
    }))

const ImageBox = styled(Box)(()=>({
   minWidth:"100px",
   minHeight:"100px",
   background:Colors.font,
   display:'flex',
   alignItems:"center",
   justifyContent:"center",
  
    borderRadius: "50%",
    '& img': { 
       
        width:"60px",
        height:'60px',
        objectFit:'contain'
      
      },
    
    }))
    const StyledCardContent = styled(CardContent)(()=>({
       textAlign:"center"
         
         
         }))


const index = (props) => {
  return (
    <ProcessCardStyle key={props.id}>
        <Header>

      
        <ImageBox>

        <CardMedia  image={props.img.src} component="img" alt='img' />
        </ImageBox>
        </Header>
        <StyledCardContent>
            <Typography variant="h6">{props.processheading}</Typography>
            <Typography variant="body2" >
          {props.processDescription}
            </Typography>
        </StyledCardContent>
      
    </ProcessCardStyle>
  )
}

export default index

