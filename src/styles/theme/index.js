import { createTheme } from "@mui/material/styles";
export const Colors={
    primary:"#F35820",// orange
    secondary:"#C2B3D8",//voilet
    warning:"#FDD47A",//lemon
    white:"#FFFFFF",//white
    lightblack:"#131313",//lightblack
   font:"#252525",//gray
   info:"#3ED3FD",//sky
    darkBlack:"#000000", //darkBlack
    divider:"#3E3E3E",
    primaryLite:"#FB6E3B",
    textColor:'#606060'



}
const theme = createTheme({
    typography:{
        fontFamily:"Poppins,sans-serif",
        // fontFamily: props => props.fontFamily ? "Oswald, sans-serif" : "Poppins, sans-serif",

        h1:{
            fontSize:"85px",
            fontWeight:700,
            "@media(max-width:1200px)":{
                fontSize:"80px",
                fontWeight:500,
               },

            "@media(max-width:900px)":{
                fontSize:"75px",
                fontWeight:500,
               },

            "@media(max-width:600px)":{
                fontSize:"50px",
                fontWeight:500,
               }
          
        },
        h2:{
            fontSize:"70px",
            fontWeight:700,
            "@media(max-width:1200px)":{
                fontSize:"60px",
                fontWeight:500,
               },

            "@media(max-width:900px)":{
                fontSize:"55px",
                fontWeight:500,
               },

            "@media(max-width:600px)":{
                fontSize:"44px",
                fontWeight:500,
               }

        },
        h3:{
            fontSize:"22px",
            fontWeight:"400",
            lineHeight:"35px",
            "@media(max-width:900px)":{
                fontSize:"16px",
                fontWeight:400,
                lineHeight:"25px",
               }
        },
        h4:{
            fontSize:"18px",
            fontWeight:"400",
            lineHeight:"26px",
           
            "@media(max-width:900px)":{
                fontSize:"18px",
                fontWeight:400,
               },
               "@media(max-width:600px)":{
                fontSize:"16px",
                fontWeight:400,
               },
        },
        h5:{
            fontSize:"22px",
            fontWeight:"700",
            "@media(max-width:900px)":{
                fontSize:"18px",
                fontWeight:500,
               },
            "@media(max-width:600px)":{
                fontSize:"16px",
                fontWeight:400,
               },
        },
        h6:{
            fontSize:"24px",
            fontWeight:500,
           "@media(max-width:900px)":{
            fontSize:"20px",
            fontWeight:400,
           },
           "@media(max-width:600px)":{
            fontSize:"18px",
            fontWeight:400,
           }
           
        },
        subtitle1:{
            fontSize:"12px",
            fontWeight:"500",
            // fontFamily:"Oswald, sans-serif"
        },

       
       
        body1:{
            fontSize:"16px",
            fontWeight:500,
            lineHeight:"25px",
            "@media(max-width:900px)":{
               fontSize:"12px",
               fontWeight:"500"
               }
        },

        body2:{
            fontSize:"12px",
            fontWeight:400,
            lineHeight:"25px",
        }
       
       

    }
})
export default theme;