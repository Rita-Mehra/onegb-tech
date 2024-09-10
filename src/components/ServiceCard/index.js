import React,{useState} from 'react';
import { styled } from "@mui/material/styles";
import { Colors } from "../../styles/theme";
import Image from 'next/image';
import GoogleAds from "../../Assets/GoogleAds.png";
import { Card,  CardContent, CardActions, Button, Avatar, IconButton, CardMedia, Box,Typography } from "@mui/material";
import ComingSoon from "../ComingSoon";


const StyledCard = styled(Card)(({theme}) => ({
  minHeight: "401px",
  maxWidth: "280px",
  // opacity: "0.15",
  // direction:"column",
  // display:"flex",
  background:"rgba(255,255,255,0.15)",
  justifyContent:"center",
  [theme.breakpoints.down("sm")]:{
    margin :"auto"
  }
 
}))

const StyledCardHeader = styled(Box)(() => ({
  height: "125px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  // border:"1px solid red"
 
  // width: "100%"


}))

const AvatarBox = styled(Box)(() => ({
  width: "100px",
  height: "100px",
  borderRadius:"50%",
  background:Colors.white,
 
  opacity:"1",
  display:"flex",
  justifyContent:"center",
  alignItems:"center" 

}))

const StylesImage = styled(Image)(()=>({
  width:"50px",
  height:"50px",
}))

const StyledCardContent= styled(CardContent)(()=>({
  textAlign:"center",
  color:Colors.white
}))
 const StyledButton = styled(Button)(()=>({
  color:Colors.primary,
  textAlign:"center"
 }))

const index = (props) => {
 
  const {img, serviceName,serviceDescription} = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledCard className='project'>
     
        <StyledCardHeader >
          <AvatarBox>
            <StylesImage src={img} alt="img" />  
          </AvatarBox>


        </StyledCardHeader>
        <StyledCardContent >
        <Typography gutterBottom variant="h6" component="div" sx={{minHeight:"80px", display:"flex",alignItems:"center", justifyContent:"center"}}  >
         {serviceName}
        </Typography>
        <Typography variant="body2"  >
         {serviceDescription}
        </Typography>
        <CardActions sx={{justifyContent:"center"}}>
        {/* <StyledButton size="md"  onClick={handleOpen}>EXPLORE MORE</StyledButton> */}
        {open && <ComingSoon handleOpen={handleOpen} handleClose={handleClose} open={open} />}
       
      </CardActions>
      </StyledCardContent>
      

      

    </StyledCard>
  )
}

export default index
