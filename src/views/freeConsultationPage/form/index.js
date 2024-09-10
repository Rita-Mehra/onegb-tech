import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import SectionsHeading from "../../../components/SectionsHeading";
import { Stack, Container, TextField, Box, Autocomplete } from '@mui/material';
import bgImage from "../../../Assets/FreeConsultation.png";
import { Colors } from "../../../styles/theme";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';



const StyledContainer = styled(Container)(({theme}) => ({
  minHeight: "500px",
  background: `url(${bgImage.src})`,
  // border: "1px solid red",
  width: "50%",
  backgroundSize: "100% 500px",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  // justifyContent:"center",
  padding:"20px",

  [theme.breakpoints.down("lg")]:{
    width:"60%",
    margin:"10px",
    backgroundSize: "98% auto",
    margin :"auto"

  },

  [theme.breakpoints.down("md")]:{
    width:"80%",
    margin:"10px",
    backgroundSize: "98% auto",
    margin :"auto"

  },
  [theme.breakpoints.down("sm")]:{
    width:"100%",
    margin:"10px",
    backgroundSize: "98% 600px",

  }


}))

const BasicInfo = styled(Box)(({theme}) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  rowGap:"20px",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr ",
    
  }
  //  border:"1px solid red",
}))

const StyledTextField = styled(TextField)(({theme}) => ({
  // borderBottom: `0.2px solid ${Colors.font}`,
  margin: "auto",
  minWidth: '300px',
  minHeight:"50px",
  [theme.breakpoints.down("lg")]:{
    minWidth:"280px",
    margin:"0"
  },
 
 
  
  " & label": {
    color: Colors.white,
    fontSize: "12px",
    fontWeight: "400px",
    paddingLeft:"20px",
  
     

  },
  " & input": {
    color: Colors.white,
    fontSize: "14px",
    fontWeight: "normal",
    borderBottom: `0.2px solid ${Colors.font}`,
   

  },

  '& label.Mui-focused': {
    color: Colors.primary,
    borderBottomColor: "transparent",

  },

  '& .MuiInput-underline:after': {
    borderBottomColor: Colors.primary,
  },

 

  

}))

const OtherInfo = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr ",
  gap: "20px",
  // border:"1px solid red",
}))

const StyledAutocomplete = styled(Autocomplete)(() => ({
  // borderBottom:`0.2px solid ${Colors.font}`,

  // border:"1px solid red",
  "& label": {
    color: Colors.white,

    fontSize: "12px",
    fontWeight: "400px",

  },

  '& label.Mui-focused': {
    color: Colors.primary,
    // borderBottomColor: "transparent",

  },
  '& .MuiPaper-root': {
    backgroundColor: 'blue', // Change this to the desired background color
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: Colors.primary,
  },




}))
const StyledDatePicker  = styled(DatePicker)(() => ({
  borderBottom:`0.2px solid ${Colors.font}`,


  "& label": {
    color: Colors.white,

    fontSize: "12px",
    fontWeight: "400px",

  },
  '& .Mui-focused': {

    
    borderBottom: `${Colors.primary} 1px solid`,
       borderRadius:"0px"


  },
 

  '& label.Mui-focused': {
    color: Colors.primary,
    borderBottom: "transparent",

    
   

  },

  " & input": {
    color: Colors.white,
    fontSize: "14px",
    fontWeight: "normal",

  },
 
}))


const MultilineComment = styled(StyledTextField)(() => ({
 margin:"0",




}))

const ButtonCover = styled(Box)(()=>({
  // border:"1px solid red",
  margin:"auto"

}))

const StyledButton= styled(LoadingButton)(({loading})=>({
 
  // border:"1px solid red",
  // background:Colors.primary,
  background:loading?Colors.primary:Colors.primary,
  color:Colors.white,
  borderRadius:"20px",
  minWidth:"120px",
  "&:hover": {
    background: Colors.primary,
  },
  

}))


const index = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate);
  const [loading,setLoading] = useState(false)
  const handleClick=()=>{
    setLoading(!loading)

  }

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }]
  return (
    <Stack>
      <SectionsHeading mainHeading="Schedule a free consultation" description="Each website we craft has a distinctive charm that effectively builds trust and addresses buyers' doubts." />
      <StyledContainer maxWidth="xl">
        <BasicInfo>
          <StyledTextField id="standard-basic" label="First Name" variant="standard" />
          <StyledTextField id="standard-basic" label="Last Name" variant="standard" />
          <StyledTextField id="standard-basic" label="Email" variant="standard" />
          <StyledTextField id="standard-basic" label="Phone No." variant="standard" />
        </BasicInfo>

        <OtherInfo>
          {/* <StyledAutocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            variant="standard"
            renderOption={(props, option) => (
              <div {...props} style={{ backgroundColor: Colors.darkBlack, color: Colors.white, fontSize: "12px", fontWeight: "normal",
              paddingLeft:"0px"

               }}>
                {option.label}
              </div>
            )}
            renderInput={(params) => <StyledTextField {...params} label="Consultation Interest" 
            InputLabelProps={{ style: { paddingLeft: "0px" } }} 
            />}
          /> */}



          <StyledDatePicker
            label='Desired Date For Consultation'
            disablePast 
            value={selectedDate}
            variant="standard" 
            onChange={newValue => {
              setSelectedDate(newValue)
            }}
            renderInput={params => <StyledTextField {...params} variant="standard"  />}
          />
           <MultilineComment
          id="outlined-multiline-flexible"
          label="Additional Info / Comment"
        
         
          minRows={2}
          variant="standard" 
            multiline
         
        />
        </OtherInfo>
        <ButtonCover>
        <StyledButton
        // loading
        loadingPosition="start"
        endIcon={loading===true?null:<ArrowForwardOutlinedIcon />}
        // endIcon={<ArrowForwardOutlinedIcon />}
        variant="contained"
        loading={loading}
      
        onClick={()=>{
          handleClick()
        }
        }
      >
        Send
      </StyledButton>
        </ButtonCover>

      </StyledContainer>


    </Stack>
  )
}

export default index

