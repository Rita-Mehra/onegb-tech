import {styled} from "@mui/material/styles";
import { Stack, Typography, Box,Card } from "@mui/material";
import {Colors} from "../../theme";

export const StyledStack = styled(Stack)(({theme})=>({
  alignItems:"center",
  minHeight:"700px",
  height:"100%",
  justifyContent:"center",

  marginTop:"20px",
  [theme.breakpoints.down("md")]:{
    minHeight:"500px",
    // border:"1px solid red",

  }

}))

export const TypographyStyle = styled(Typography)(()=>({
    color:Colors.primary,
}))
export const ImageBox = styled(Box)(({theme})=>({
  padding:"20px 0px",
  [theme.breakpoints.down("lg")]:{
    
    minWidth:"900px",
    // minHeight:"300px",
    width:"100%",
    height:"100%",
    padding:"10px",
    "& img":{
      width:"100%",
      height:"100%",
      objectFit:"contain"

    }
  },
  [theme.breakpoints.down("md")]:{
    minWidth:"300px",
    // minHeight:"300px",
    width:"100%",
    height:"100%",
    padding:"10px",
    "& img":{
      width:"100%",
      height:"100%",
      objectFit:"contain"

    }
  }

}))
// export const Info = styled(Typography)(()=>({
//   width:"500px",
//   textAlign:"center",
//   marginTop:"20px",
// }))

export const OurClients = styled("div")(({theme})=>({

  minHeight:"200px",
  height:"100%",
  display:"block",
  width:"100%",
  display:"flex",

  flexDirection:"row",
  gap:"20px",
  overflow:"scroll",
  padding:"30px 0px",
  [theme.breakpoints.down("md")]:{
    minHeight:"150px",


  }


}))

export const StyledCard = styled(Card)(({theme})=>({
 
  background:Colors.darkBlack,
  width:"100%",
  // height:"100%",
  minWidth:"250px",
  height:"100px",
  borderRadius:"10px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  '& .MuiCardMedia-root': {   
    width: '150px', 
    height: '100px',
    objectFit: 'contain', 
    [theme.breakpoints.down("md")]:{
      maxHeight:"70px",
      width:"100px"
    
    }

  },

[theme.breakpoints.down("md")]:{
  maxHeight:"60px",
  minWidth:"150px"

}
}))
