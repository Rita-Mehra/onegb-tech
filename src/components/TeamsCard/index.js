import React from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import styled from "@emotion/styled";
import {Colors} from "../../styles/theme";
import Avatar1 from "../../Assets/Avatar1.png";
import Avatar2 from "../../Assets/Avatar2.jpg";
import Avatar3 from "../../Assets/Avatar3.jpg";

import { Card, CardHeader, CardContent, Avatar, AvatarGroup,Box, Typography, IconButton } from '@mui/material';

const StyledTeamsCard = styled(Card)(({theme}) => ({
    minWidth: "268px",
    minHeight: "300px",
    background:Colors.darkBlack,
    color:Colors.white,
    [theme.breakpoints.down("md")]:{
     
      minHeight:"200px",

    }
    
    // margin:"auto"

}))

const StyledCardHeader = styled(Box)(() => ({
//    border:"1px solid red",
   minHeight:"98px",
   display:"flex",
   justifyContent:"center",
   alignItems:"center"

}))

const StyledAvatar = styled(Avatar)(() => ({
    width:"50px",
    height:"50px",
    border:`2px solid ${Colors.darkBlack}`,
    imageRendering: "pixelated"

 
 }))

 const TooltipCard = styled(Card)(() => ({
   minWidth:"200px",
   minHeight:"200px",
   background:Colors.font,
   
 
 }))

  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: Colors.font,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: Colors.font,
     
    },
  }));





const index = (props) => {
    const {key,field,description,teamMembers} = props
    console.log(teamMembers);
    return (
        <StyledTeamsCard key={key}>
            <StyledCardHeader>
            <StyledTooltip arrow  placement="top-end" title={
            
            <TooltipCard elevation={false}>
                {
                    teamMembers.map((e)=>(
                        <CardHeader
                        avatar={
                          <Avatar aria-label="">
              
                             <StyledAvatar alt="Remy Sharp" src={Avatar1.src} />
                          </Avatar>
                        }
                       
                        title={<Typography gutterBottom={false} variant='body2'sx={{ fontSize:"14px",color:Colors.white}}>
                         {e.name}
                        </Typography>}
                        subheader={<Typography variant='body2' sx={{lineHeight:"10px",fontSize:"10px", color:Colors.primary}}>
                     {e.post}
                      </Typography>}
                        
                      />
                    ))
                }
           
          </TooltipCard>
              }>
            <AvatarGroup total={24}  >
                        <StyledAvatar alt="Remy Sharp" src={Avatar1.src} />
                        <StyledAvatar alt="Travis Howard" src={Avatar2.src} />
                        <StyledAvatar alt="Agnes Walker" src={Avatar3.src} />
                        <StyledAvatar alt="Trevor Henderson" src={Avatar1.src} />
                    </AvatarGroup>
                    </StyledTooltip>
            </StyledCardHeader> 
               
           


           
            <CardContent>
                <Typography variant="h5" sx={{marginBottom:"20px"}}>{field}</Typography>
                <Typography variant="body2">
                {description}
                </Typography>

            </CardContent>
           
        </StyledTeamsCard>

     
    )
}

export default index
