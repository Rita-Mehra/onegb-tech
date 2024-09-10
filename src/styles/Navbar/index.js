import {styled} from "@mui/material/styles";
import { List,AppBar,ListItemText,Box, Divider,Toolbar, Stack,Avatar } from "@mui/material";
import {Colors} from "../theme";

import BannerBgs from "../../Assets/Bannerbgs.png";



export const StyledAppBar = styled(AppBar)(({theme,navbarColor,isHomePage})=>({
justifyContent:"center",
// background:Colors.lightblack,
background: navbarColor === true || !isHomePage ? Colors.lightblack : "transparent",
boxShadow:"none",
position:"sticky",
top:0,
left:0,
backgroundSize:"cover",
// border:"1px solid red",
// height:"100px"
[theme.breakpoints.down("md")]: {
    display:"flex",
   justifyContent:"space-between"
      },

})) 

export const StyledToolbar = styled(Toolbar)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    gap:"20px",
    width:"80%",
    display:"flex",
    justifyContent:"space-between",
    margin:"auto",
    [theme.breakpoints.down("md")]: {
        display:"flex",
       justifyContent:"space-between"
          },
    
    })) 
export const StyledBox = styled(Box)(({theme})=>({

    // marginRight:"20px",
    cursor:"pointer",
    [theme.breakpoints.down("md")]: {
    //    border:"1px solid red",
       width:'200px',
   
       "& img":{
        width: "100%",
        height: "100%",
      
        objectFit:"contain"
        // borderRadius: "50%",

       }
      },
}))

export const MyList = styled(List)(({theme})=>(
    {
        display:"flex",
       flexDirection:"row",
       minWidth:"500px",
       textAlign:"center",
    //    flexGrow:0.3,
       [theme.breakpoints.down("md")]: {
       display:"none"
      },

      
    }
));

export const StyledListItemText = styled(ListItemText)(({ active }) => ({
    cursor: "pointer",
   '&>span':{
    fontSize:"14px",
   },
    color: active ? Colors.primary : Colors.white,
  
  }));
  

export const StyledDivider = styled(Divider)(()=>(
    {
 background:Colors.divider
}
));
// <---------------------------Styling For Mobile Navbar---------------------------->
export const MobileNavStack = styled(Stack)(()=>({
    minHeight:"500px",
    // border:"1px solid red",
    width:"100%",
    alignItems:"center",
    background:Colors.font,
    padding:"10px"
}))
export const TextBox= styled(Box)(()=>({
// border:"1px solid red",
width:"100%",
height:"50px",
"& img":{
    width:"100%",
    height:"100%",
    objectFit:"contain"

}
}))

export const ImageBox= styled(Box)(()=>({
    
}))

export const StyledListItemTextMobile = styled(ListItemText)(({ active })=>(
    {
  cursor:"pointer",
  textAlign:"center",
  color: active ? Colors.primary : Colors.white,

}
));

export const MyListMobile = styled(List)(()=>(
    {
     
     display:"flex",
     flexDirection:"column",
     gap:"10px",
     marginTop:"20px"
    }
));

export const StyledAvatar = styled(Avatar)(()=>({
    width:"50px",
    height:"50px",
    color:Colors.darkBlack,
    fontSize:"2px"
  

}))

export const AvatarBox = styled(Box)(()=>({
    display:"flex",
    gap:"5px",
    marginTop:"20px"
  

}))