import { styled } from "@mui/material/styles";
import { Colors } from "../../theme";
import UspBg from "../../../Assets/UspBg.png";
import Star from "../../../Assets/Star.png";


import {
    Box, Typography, Card, Container, CardHeader, CardMedia,IconButton,CardContent,
    CardActionArea
} from "@mui/material";

export const StyledBox = styled(Box)(({theme}) => ({
    minHeight: "1300px",
    // border: "1px solid red",
    [theme.breakpoints.down("md")]:{
        minHeight:"2300px",
        // border:"1px solid red"
    }


}))
export const UspBox = styled(Box)(() => ({
    minHeight: "350px",
    background: `url(${UspBg.src})`,
    // border: "1px solid white",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 350px",
    display: "flex",
    justifyContent: "center",
    marginBottom: "80px"



}))
export const StarBox = styled(Box)(({theme}) => ({
    
    minWidth:"950px",
    // border:"1px solid blue",
    minHeight: "350px",
    display: "flex",
    position: "relative",
    top:"0",
    left:"0",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]:{
        width:"100%",
        minWidth:"300px",
        flexWrap:"wrap"

    }




}))

export const UspDetail1 = styled(Box)(({theme}) => ({

    background: `url(${Star.src})`,
    // border:"1px solid pink",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    minWidth:"300px",
    minHeight: "250px",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]:{
        minWidth:"200px",
        justifyContent:"center",
        minHeight:"200px"
       
    },
    [theme.breakpoints.down("sm")]:{
        minWidth:"150px", 
        justifyContent:"center",
        minHeight:"200px"
        
    }

}))

export const UspDetail2 = styled(UspDetail1)(({
    theme
}) => ({
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    minWidth:"400px",
    minHeight: "300px",
    [theme.breakpoints.down("md")]:{
        minWidth:"300px",
        minHeight:"250px",   
        justifyContent:"center"
      
    },
    [theme.breakpoints.down("sm")]:{
        minWidth:"200px",
        justifyContent:"center"
    }







}))
export const UspDetail3 = styled(UspDetail1)(() => ({
    right:"0"

}))
export const ImageCover = styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]:{
        minWidth:"10px",
        minHeight:"10px",
        "& img":{
            width:"50px",
            height:"50px",
            objectFit:"contain"
        }
    },
    [theme.breakpoints.down("sm")]:{
        minWidth:"10px",
        minHeight:"10px",
        "& img":{
            width:"40px",
            height:"40px",
            objectFit:"contain"
        }
    }
   
}))


export const UpsText = styled(Typography)(({theme}) => ({
    fontWeight: "400",
    fontSize: "14px",

    [theme.breakpoints.down("md")]:{
        fontSize:"12px",
      
    },


    [theme.breakpoints.down("sm")]:{
        fontSize:"10px",
        lineHeight:"15px"
    }

}))

export const ExperienceCard = styled(Card)(({ theme,...props }) => ({
    minWidth: "300px",
    width:"100%",
    height:"100%",
   
    minHeight: "330px",
    borderTopLeftRadius: props.borderTopLeft,
    borderTopRightRadius: props.borderTopRight,
    borderBottomLeftRadius: props.borderBottomLeft,
    borderBottomRightRadius: props.borderBottomRight,
    background: props.color,
    // borderRadius:"20px"
    padding: "0 30px",
    [theme.breakpoints.down("lg")]:{
        // border:"1px solid white",

        minWidth:"200px",
        minHeight:"300px",
        padding:"10px",

    },
    [theme.breakpoints.down("md")]:{
        minWidth:"280px",
        minHeight:"300px",
        padding:"10px",

    }


}))

export const CardContainer = styled(Container)(({theme}) => ({
        gap:"50px",
        display:"flex",
        flexDirection:"column",
        // [theme.breakpoints.down("lg")]:{
        //     minWidth:"700px",
        //     width:"100%",
        //     border:"1px solid red"

        // },
        [theme.breakpoints.down("md")]:{
            // border:"1px solid blue",
          justifyContent:"center",
          display:"flex",
          gap:"20px",

        }

  

}))

export const CoverBox = styled(Box)(({theme}) => ({
    display: "flex",
    minWidth: "1100px",
    // border:"1px solid red",
    gap: "20px",
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]:{
        minWidth:"700px",
        width:"100%",
        // border:"1px solid blue",
     //    minHeight:"350px"
       
 
 
 
     },
    [theme.breakpoints.down("md")]:{
        flexDirection:"column",
        minWidth:"300px",
        justifyContent:"center",
       gap:"20px",
      



    }


}



))

export const CardHeaders = styled(CardHeader)(() => (
    {
        // border:"1px solid red",
        display: "flex",
        alignItems: "center",

    }
))

export const TitleDesign = styled(Box)(() => ({
    display: "flex",
    // border:'1px solid red',
    gap: "20px",
    color: Colors.font,

}))
export const HeadingMain = styled(Typography)(({theme}) => ({
    display: "flex",
    fontFamily: "Oswald, sans-serif",
    // border:'1px solid red'

}))

export const SubHeading = styled(Typography)(() => ({
    display: "flex",
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Oswald, sans-serif",
    alignItems: "center",
    paddingRight: "60px",
    lineHeight: "normal",
    fontSize: "26px",
    letterSpacing: '0.7px',

}))

export const CardContext = styled(Typography)(({theme}) => ({
    fontSize: "14px",
    [theme.breakpoints.down("lg")]:{
        display:"flex",
    }

}))

export const ProjectCard = styled(Card)(({theme}) => ({
    width: '50%',
    borderRadius:"25px",
    borderTopRightRadius:"125px",
    [theme.breakpoints.down("md")]:{
        minWidth:"280px",
        width:"100%",

    }
    // border

}
))

export const Testimonials = styled(Card)(({theme}) => ({
    width: '50%',
    color:Colors.white,
    background:"transparent",
    border:"none",
    [theme.breakpoints.down("md")]:{
        minWidth:"280px",
        width:"100%",
        minHeight:'300px'
    }
    // border:"1px solid red"

      

}
))
export const StyleCardMedia= styled(CardMedia)(()=>({
    width:"50px",
    height:"50px"
}))

export const YoutubeCard= styled(Card)(()=>({
   
    background:Colors.darkBlack,
    borderRadius:"40px",
    marginTop:"10px",
    
    // border:"1px solid red",
  



}))

export const YTCardActionArea= styled(CardActionArea)(()=>({
    padding:"0px 10px",
    background:Colors.darkBlack,
    borderRadius:"40px",
    // marginTop:"10px",
    display:"flex",
    justifyContent:"space-between"
  



}))

export const YouTubeCardHeader= styled(CardHeader)(()=>(

    {
        padding:"0",
        display:"flex",
        alignItems:"center"
       

    }
))

export const YTTypography = styled(Typography)(({theme})=>({
    fontSize:"14px",
    fontWeight:"700",
    color:Colors.white,
    [theme.breakpoints.down("md")]:{
        fontSize:"12px",
        fontWeight:"500",
      
    }

}))

export const YTSubhead = styled(Typography)(()=>({
   
    color:Colors.primary,
    fontWeight:"700"
    
}))

export const YTCardContent = styled(CardContent)(()=>({
display:"flex",
alignItems:"center",
padding:"0",
paddingBottom:"0  !important",



}))

export const YTButton = styled(IconButton)(()=>({
    // border:"1px solid red",
    background:"white"


}))