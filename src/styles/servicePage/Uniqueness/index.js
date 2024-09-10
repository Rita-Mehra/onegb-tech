import { styled } from "@mui/material/styles";
import { Stack,Container,Box } from "@mui/material";
export const UniquenessStack = styled(Stack)(()=>({
    // border:'1px solid red',
    minHeight:"700px",
    display:"flex",
    alignItems:"center",
   
    justifyContent:"center"
}))

export const HeadingBox = styled(Box)(()=>({
    //    border:'1px solid red',
       maxWidth:"650px",
       width:"100%",
       textAlign:"center"

}))

export const UniquenessContainer = styled(Container)(({theme})=>({
    // border:'1px solid red',
    minHeight:"300px",
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    gap:"15px",
    width:"80%",
    [theme.breakpoints.down("md")]:{
        // border:"1px solid red",
        
        width:"100%"

    },
    [theme.breakpoints.down("sm")]:{
        // border:"1px solid red",
        gridTemplateColumns:"1fr",
        width:"100%"

    }
}))
