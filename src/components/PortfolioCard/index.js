import React,{useState} from 'react';
import Image from 'next/image';
import { Colors } from "../../styles/theme";
import ComingSoon from "../ComingSoon";
import Portfolio from "../../Assets/Portfolio.png";
import { styled } from "@mui/material/styles";
import { Container, Box, Typography } from '@mui/material';
import Button from "../Button";

const CardContainer = styled(Container)((props) => ({
   
    minHeight: "300px",
    background: props.index % 2 === 0 ? Colors.darkBlack : Colors.lightblack,
    display: "flex",
    justifyContent:"center",
    marginBottom:"20px",
   
    // border: "1px solid red"


}))

const ContainerBox = styled(Box)(({theme,index}) => ({
    display: "flex",
    minHeight: "300px",
   width:"90%",
   justifyContent:"center",
    gap: "50px",
    alignItems: 'center',
    padding: "15px",
    flexDirection: index % 2 === 0 ? "row-reverse" : "row",
    // border: "1px solid red",

    [theme.breakpoints.down("md")]:{
        
        width:"100%",
        gap:"50px",
        justifyContent:"space-between"
    },
    [theme.breakpoints.down("sm")]:{
        flexDirection:"column-reverse",
        width:"100%",
        gap:"10px"
    }


}))
const TextContainer = styled(Box)(({theme}) => ({
    minWidth: "400px",
    // border: "1px solid red",

    [theme.breakpoints.down("md")]:{
        minWidth:"280px",
        

    },
    [theme.breakpoints.down("sm")]:{
        minWidth:"280px",
        textAlign:"center"

    }
   

}))
const ImageContainer = styled(Box)(({theme}) => ({
    minWidth: "400px",
    // border: "1px solid red",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down("md")]:{
        minWidth:"280px",

    },

    [theme.breakpoints.down("sm")]:{
        minWidth:"280px",

    }
}))

const ImageCover = styled(Box)(({theme}) => ({
    width: "350px",
    height: "300px",
    "& img": {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    },
    [theme.breakpoints.down("md")]:{
        width:"280px",
        height:"200px"

    }

}))


const index = (props) => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <CardContainer id={props.id} index={props.index}>
            <ContainerBox index={props.index}>    
                        <TextContainer>
                <Typography variant="h3"sx={{marginBottom:"20px"}} >
                    {props.heading}
                </Typography>
                <Typography variant="body2" sx={{marginBottom:"20px"}}>
                 {props.description}
                </Typography>
                <Button name="VIEW CASESTUDY"  passingprop={handleOpen} />
            </TextContainer>
                <ImageContainer>
                    <ImageCover>
                        <Image src={props.img} alt="img" />
                    </ImageCover>

                </ImageContainer>
                {open && <ComingSoon handleOpen={handleOpen} handleClose={handleClose} open={open} />}
            </ContainerBox>


        </CardContainer>
    )
}

export default index
