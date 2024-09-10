import styled from "@emotion/styled";
import {Card} from '@mui/material';
import {Colors} from "../../../styles/theme";
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
  
