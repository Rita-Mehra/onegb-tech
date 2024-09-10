import React,{useState} from 'react'
import {Colors} from "../../styles/theme";
import {styled} from "@mui/material/styles";
import StyledButton from "../Button";
import UpdateImg1 from "../../Assets/UpdateImg1.png";
import ComingSoon from "../ComingSoon";

import { Card,CardMedia,CardContent,Typography,CardActions,ButtonGroup,Button } from '@mui/material'
import {ArrowForward,CalendarTodayOutlined,ShareOutlined,CommentOutlined,Circle} from '@mui/icons-material';


const StyledCard = styled(Card)(({theme})=>({


 
  // minHeight:"400px",
  Height:"100%",
  // maxWidth:"300px",
  minWidth:"250px",
  width:"100%",
 
  background:Colors.darkBlack,
  color:Colors.white,
  transition:"all 0.25s ease-in-out 0s",
  '&:hover':{
    transform: `translateY(-10px)`
  },
  [theme.breakpoints.down("sm")]:{
   
    minWidth:"280px",
    width:"100%"
  
  }
}))
const CardMediaWrap = styled("div")(()=>({
  
  '& .MuiCardMedia-root': {   
    width: '100%', 
    height: '100%',
    objectFit: 'cover', 
  },

  // '& .MuiCardMedia-root:hover': {   
  //   transform:`scale(1.5)`
   
  // },
}))

export const StyledCardContent = styled(CardContent)(()=>({

}))

export const StyledButtonGroup = styled(ButtonGroup)(()=>({
  border:Colors.white,

  "& .MuiButton-startIcon": {
    color: Colors.primary,
  },

  "& .MuiButton-root": {
    color: Colors.white, // Change text color here
    fontSize:"12px" 
  },

  "& .MuiButtonGroup-grouped:not(:last-child)::after": {
    content: "''", // Empty string for content
   
  },


}))
const StyledCircle = styled(Circle)(()=>({
  fontSize:"10px"
}))


const index = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <StyledCard key={props.key}>
      <CardMediaWrap>
    <CardMedia   component="img" src={props.img.src}  alt="img"/>

      </CardMediaWrap>
      <StyledCardContent>
      <Typography gutterBottom variant="h4" >
     {props.updateHeading}
        </Typography>
        <StyledButtonGroup variant="text" aria-label="Basic button group"size="small" >
        <Button startIcon={<CalendarTodayOutlined/>} disabled style={{color:"white"}}>Sep 22,2024</Button>
        <Button startIcon={<CommentOutlined/>}>3 Comments</Button>
        <Button startIcon={<StyledCircle/>&&<ShareOutlined/>}/>
      </StyledButtonGroup>
        <Typography variant="body2" >
         {props.updateDescription}
        </Typography>
      </StyledCardContent>
      <CardActions>
        <StyledButton name="Learn More" endicon={ArrowForward}  passingprop={handleOpen}/>
      </CardActions>
      {open && <ComingSoon handleOpen={handleOpen} handleClose={handleClose} open={open} />}
    </StyledCard>
  )
}

export default index
