import React from 'react';
import styled from "@emotion/styled";
import { Container, Box, Typography, TextField, InputAdornment, IconButton, Avatar } from '@mui/material';
import ContactUs from "../../../Assets/Contactus.png";
import { Colors } from "../../../styles/theme";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PageSubheader from "../../../components/PageSubheader";

const StyledContainer = styled(Container)(({theme}) => ({
    minHeight: "580px",
    display: "flex",
    gap: "30px",
    position:"relative",
    [theme.breakpoints.down("sm")]:{
        minHeight: "450px",
       
        backgroundImage: `radial-gradient(circle, ${Colors.darkBlack}, ${Colors.font})`,
       

    }

    // border: "1px solid red",

}))

const FormBox = styled(Box)(({theme}) => ({
    minHeight: "580px",
    minWidth: "600px",
    // border: "1px solid red",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    [theme.breakpoints.down("md")]:{
       minWidth:"400px"
       
    },
    [theme.breakpoints.down("sm")]:{
        minWidth:"280px",
        alignItems: "center",
        marginTop:"20px",
       
    }

}))

const InnerBox = styled(Box)(({theme}) => ({
    height: "450px",
    width: "400px",
    [theme.breakpoints.down("sm")]:{
       textAlign:"center",
       height: "400px",
    }

}))
const ImageBox = styled(Box)(({theme}) => ({
    minHeight: "580px",
    minWidth: "400px",
    background: `url(${ContactUs.src})`,
    backgroundSize: "100% 580px",
    backgroundRepeat: "no-repeat",
    // border: "1px solid red",
    [theme.breakpoints.down("lg")]:{
        minWidth:"350px",
     //    backgroundPosition:"right"
     },
    [theme.breakpoints.down("md")]:{
       minWidth:"300px",
    //    backgroundPosition:"right"
    },
    [theme.breakpoints.down("sm")]:{
        display:"none"
    }


}))


const StyledTextField = styled(TextField)(() => ({
    // borderBottom: `0.2px solid ${Colors.font}`,
    margin: "auto",
    minWidth: '300px',
    minHeight: "50px",



    " & label": {
        color: Colors.white,
        fontSize: "12px",
        fontWeight: "400px",
        //   paddingLeft:"20px",



    },
    " & input": {
        color: Colors.white,
        fontSize: "14px",
        fontWeight: "normal",


    },

    '& label.Mui-focused': {
        color: Colors.primary,
        borderBottomColor: "transparent",

    },

    '& .MuiInput-underline:after': {
        borderBottomColor: Colors.primary,
    },





}))
const StyledAvatar =styled(Avatar)(() => ({
   background:Colors.primaryLite,



}))

const StyledSubheaderBox =styled(Box)(({theme}) => ({
 position:"absolute", 
//  border:"1px solid red",
width:"100%",
[theme.breakpoints.down("lg")]:{
   width:"90%"
}

 
 }))


const index = () => {
    return (
        <StyledContainer >
            <StyledSubheaderBox>
            <PageSubheader/>
            </StyledSubheaderBox>
           
            <FormBox>
                <InnerBox>


                    <Typography variant="h6" >Let's start a conversation</Typography><br />
                    <Typography variant="body2" >Let us help you navigate IT services and find tailored solutions for your business. Whether you have questions, need assistance, or want to collaborate, our team is ready to support you. Contact us today to discuss!</Typography><br />
                    <StyledTextField id="standard-basic" label="Name" variant="standard" autoComplete="off" /><br /><br />
                    <StyledTextField id="standard-basic" label="Email" variant="standard" /><br /><br />
                    <StyledTextField
                        id="outlined-multiline-flexible"
                        label="Message"
                        minRows={4}
                        variant="standard"
                        multiline
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="submit" >
                                        <StyledAvatar>
                                            <ArrowOutwardIcon style={{ color: 'black' }} />
                                        </StyledAvatar>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </InnerBox>
            </FormBox>
            <ImageBox></ImageBox>
        </StyledContainer>


    )
}

export default index
