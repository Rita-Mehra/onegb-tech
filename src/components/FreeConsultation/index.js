import React from 'react'
import styled from '@emotion/styled'
import ConsultationBg from "../../Assets/ConsultationBg.png";
import CconsultationBtn from "../../Assets/ConsultationBtn.png";
import { useRouter } from 'next/router';


import { Box, Typography,Container,Card,CardActionArea,CardMedia } from '@mui/material'


const ContentBox= styled(Container)(({theme})=>({

 minHeight:"300px",
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 [theme.breakpoints.down("sm")]:{
  flexDirection:"column",
  // backgroundSize:"100% 500px",
  // padding:"0"
 

 }
}))


const MarginBox = styled(Box)(({theme})=>({
  display:"flex",
 justifyContent:"space-between",
 alignItems:"center",
 width:"87%",
 backgroundImage: `url(${ConsultationBg.src})`,
 backgroundRepeat:"no-repeat",
 backgroundSize:"100% 200px",
 minHeight:"200px",
 padding:"0px 100px ",

 [theme.breakpoints.down("md")]:{
  width:"100%",
  padding:"0px 50px",
 
  // minHeight:"350px",
  backgroundSize:"100% 300px",

 },

 [theme.breakpoints.down("sm")]:{
  width:"100%",
  padding:"10px",
  flexDirection:"column",
  minHeight:"350px",
  backgroundSize:"100% 350px",

 },



}))

const StyledTypography =styled(Typography)(({theme})=>({
fontWeight:"700",
[theme.breakpoints.down("sm")]:{
  fontWeight:"700",
 

 },

 [theme.breakpoints.down("md")]:{
  fontWeight:"700",
 

 }

}))

const TextContent =styled(Box)(()=>({
 maxWidth:"373px",
 width:"100%",

}))

const StyledCard =styled(Card)(({theme})=>({
  background:"transparent",
  boxShadow:"none",
  borderRadius:"50%",   
  
  // [theme.breakpoints.down("sm")]:{
  //   maxWidth:"200px",
  //   maxHeight:"200px",
  
  //  }
}))


const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  maxHeight: "150px", 
  maxWidth: "150px", 
  [theme.breakpoints.down("sm")]: {
    maxHeight: "200px", 
  maxWidth: "200px",
  },

 
}));


const index = () => {
  const router = useRouter()
  return (
    // <StyledBox>
      <ContentBox>
        <MarginBox>

      
        <TextContent>

       
        <Typography variant="h6" color="initial">Have an Awesome Idea?
Validate With Us.

</Typography>
<StyledTypography variant="h6" color="initial" component="span"> Schedule A Free Consultation.</StyledTypography>
</TextContent>
<StyledCard  onClick={() => router.push('/consultation')}>
  <CardActionArea>
  <StyledCardMedia
          component="img"
        
          image={CconsultationBtn.src}
          alt="Free consultation"
        />
  </CardActionArea>
</StyledCard>
</MarginBox>

    </ContentBox>
      
    // </StyledBox>
  )
}

export default index
