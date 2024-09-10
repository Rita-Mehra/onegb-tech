import styled from "@emotion/styled";
import { Container,Stack,Box,Card,Pagination } from "@mui/material";
import {Colors} from "../../theme";

export const StyledContainer = styled(Container)(({theme})=>({
    width:"84%",
    marginTop:'50px',
    [theme.breakpoints.down("md")]:{
        width:"100%",
        marginTop:'20px',
        
      
      
       },
    [theme.breakpoints.down("sm")]:{
        width:"100%",
        marginTop:'20px',
        
      
      
       }
}))

export const StyledBox = styled(Box)(({theme})=>({
    // border:"1px solid red",
    display:"flex",
   
    justifyContent:"space-between",
   
    gap:"25px",
    [theme.breakpoints.down("lg")]:{
        // flexDirection:"column",
        // gap:"10px",
        width:"100%",
    },
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        gap:"10px",
        width:"100%",
    }


   

}))

export const MoreCards = styled(Box)(({theme})=>({
  width:"100%",
  display:"grid",
  gridTemplateColumns:"2.05fr 1fr",
  gap:"20px",
  marginTop:"25px",
//   border:"1px solid red",
[theme.breakpoints.down("sm")]:{
    gridTemplateColumns:" 1fr",

    
  
  
   }
 
  

}))



export const LeftSide = styled(Box)(({theme})=>({
   
  
    minHeight:"1200px",
    [theme.breakpoints.down("sm")]:{
      order:"2"
      
      
       }
    
  

  

   
}))

export const LeftUpper = styled(Box)(()=>({
    // border:"1px solid blue",
    minHeight:"400px",
   

    

  

   
}))
export const LeftDown = styled(Box)(({theme})=>({
  
    display:"grid",
    gridTemplateColumns:"1fr 1fr",
    // border:"1px solid blue",
    gridTemplateRows:"1fr 1fr",
    gap:"20px",
    marginTop:"25px",
    [theme.breakpoints.down("md")]:{
       gridTemplateColumns:"1fr"
        
        
         }
    
   

  
  

  

   
}))

export const PaginationBox = styled(Box)(()=>({
  
    // border:"1px solid red",
    width:"100%",
    height:"100px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
      
}))


export const StyledPagination = styled(Pagination)(()=>({
  
//    background:Colors.font,
//    color:Colors.white
      
}))
export const RightSide = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    gap:"25px",
    [theme.breakpoints.down("sm")]:{
        order:"1"
        
        
         }

   
}))
export const ListBox = styled(Box)(()=>({
//    border:"1px solid red",
   background:Colors.darkBlack

   
}))

export const TopStories = styled(Box)(()=>({
    //    border:"1px solid red",
       background:Colors.darkBlack,
       width:"100%",
       minHeight:"200px",
       
    
       
    }))

    export const StoriesCard = styled(Card)(()=>({
       
        background:Colors.darkBlack,
        width:"100%",
        color:Colors.white
       
        
     
        
     }))

