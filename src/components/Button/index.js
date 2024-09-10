import React from 'react'
import { Button } from '@mui/material'
import { Colors } from "../../styles/theme";
import { styled } from "@mui/material/styles";
const StyledButton = styled(Button)(() => (
    {
        borderRadius: "20px",
        background: Colors.primary,
        fontSize: "14px",

        "&:hover": {
            background: Colors.primary,
        },


    }
))



const index = (props) => {
    console.log(props)
    // console.log(onclick);



    return (
        <StyledButton variant='contained' startIcon={props.icon && <props.icon />} endIcon={props.endicon && <props.endicon />} onClick={props.passingprop}>
            {props.name}
        </StyledButton>
    )
}

export default index


{/* <StyledButton variant='contained' startIcon={<props.icon />}>{props.name}</StyledButton> */ }