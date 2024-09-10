import React from 'react';
import {Colors} from "../../styles/theme";
import { styled } from "@mui/material/styles";
import { Card,CardContent, Typography } from '@mui/material';
const UniqueCard = styled(Card)(({theme})=>({
minWidth:"200px",
minHeight:"200px",
background:Colors.darkBlack,
color:Colors.white,
display:"flex",
alignItems:"center",
[theme.breakpoints.down("md")]:{
  alignItems:"flex-start",
},
[theme.breakpoints.down("sm")]:{
  // border:"1px solid red",
  width:"100%",
  minWidth:"280px",
  alignItems:"center",
}


}))

const index = (props) => {
  return (
    <UniqueCard>
      <CardContent>
        <Typography variant="h4" sx={{color:Colors.primary}} gutterBottom>{props.head}</Typography>
        <Typography variant="body2">{props.body}</Typography>
      </CardContent>
    </UniqueCard>
  )
}

export default index
