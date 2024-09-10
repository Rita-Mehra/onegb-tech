import React from 'react'
import styled from "@emotion/styled";
import {Colors} from "../../styles/theme";
import Link from 'next/link';
import {Typography,Box,Paper, Avatar} from '@mui/material'
import Modal from '@mui/material/Modal';

import {
  
    X,
    LinkedIn,
    Instagram,
    Facebook,
    RocketLaunch
   
  
  } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: "600px",
    minHeight:"400px",
    bgcolor: Colors.darkBlack,
    color:Colors.white,
    boxShadow: 24,
    p: 4,
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"

   
  
  };

 const AvatarBox = styled(Box)(()=>({
    display:"flex",
    gap:"3px",
    
  

}))

 const StyledAvatar = styled(Avatar)(()=>({
    width:"50px",
    height:"50px",
    color:Colors.darkBlack,
    fontSize:"2px"
  

}))
const IconBox = styled(Box)(()=>({
   marginBottom:"10px"
  

}))

const StyledHeading = styled(Typography)(()=>({
   fontSize:"33px",
   fontWeight:"500",

   
 
 }))

 const StyledSubHeading = styled(Typography)(()=>({
    fontSize:"14px",
    fontWeight:"300",
    
    
  
  }))


const index = (props) => {
  const arr = [ { id: 2, icon: Facebook, color: Colors.info, link:"https://www.facebook.com/themagiicians/"}, { id: 3, icon: Instagram, color: Colors.primary,  link:"https://www.instagram.com/magiicians?igsh=MndtOTV3YTRlOTU2" }, { id: 4, icon: LinkedIn, color: Colors.warning,  link:"https://www.linkedin.com/company/the-magiicians/?originalSubdomain=in" },{ id: 5, icon: X, color: Colors.secondary,  link:"https://twitter.com/magiicians" }]

  return (
    <Modal
    open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
    <Paper elevation={3} sx={style}>
        <IconBox component ="span"><RocketLaunch className='icon-class'/>  <br /></IconBox>
    <StyledHeading variant="h5" >
        {props.popTitle}
    </StyledHeading>
    <StyledSubHeading variant="body1">{props.popMessage}</StyledSubHeading>
    <AvatarBox>
            {
              arr.map((i) => (
                <Link href="#" key={i.id}  target = '_blank'>
                  <StyledAvatar style={{ background: i.color }} >
                  {i.icon && <i.icon  sx={{ fontSize: '14px' }} />}


                  </StyledAvatar>
                </Link>
              ))
            }
          </AvatarBox>
    </Paper>
    </Modal>
      
   
  )
}

export default index
