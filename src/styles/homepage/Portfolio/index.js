import {styled} from "@mui/material/styles";
import {Colors} from "../../theme";
// import Button from "@mui/material";
// import Button from "../../../components/Button";

import { Stack,Container,Card, Box,Button } from "@mui/material";

export const StyledStack = styled(Container)(({theme})=>({
    minHeight:"800px",
    alignItems:"center",
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    [theme.breakpoints.down("md")]:{
        minHeight:"1400px"
    }
   
  



   
}))
export const CoverBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:"15px",
  
    minHeight:"250px",
    alignItems:"flex-end",
    justifyContent:"center",
    margin:"10px 0px",
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        alignItems:"center",
    }
   
})) 
export const TextCard = styled(Card)(({theme})=>({


maxWidth:"700px",
width:"100%",
minHeight:"200px",
padding:"0px 50px",

borderRadius:"200px",
background:Colors.darkBlack,
color:Colors.white,
alignItems:"center",
justifyContent:"center",
display:"flex",
[theme.breakpoints.down("md")]:{
    padding:"10px",
   textAlign:"center"
   
}





}))
export const ImageCard = styled(Card)(()=>({
    maxWidth:"350px",
    maxHeight:"250px",
    position:"relative",
    borderRadius:"10px",
   
   
    '& .MuiCardMedia-root': {   
        width: '100%', 
        height: '100%',
        objectFit: 'cover', 
      },
}))

export const ExploreButton = styled(Button)(()=>({
    position:"absolute",
    bottom:"15px",
    background:Colors.lightblack,
    border:`1px solid ${Colors.primary}`,
    borderRadius:"20px",
    left:"30%",
    right:"30%",
    "&:hover":{
        background:Colors.primary
    }


}))

export const ButtonCover= styled(Box)(()=>({
    marginTop:"30px"
}))