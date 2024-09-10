import styled from "@emotion/styled";
import { Container, Box, Typography, Divider } from "@mui/material";
import { Colors } from "../../../styles/theme";
export const IntroContainer = styled(Container)(({ theme }) => ({
    minHeight: "500px",
    // border:"1px solid red",
    display: "flex",
    gap: "40px",
    width: "80%",
    marginBottom: "50px",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        // border:"1px solid red",
        width: "100%"

    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        // border:"1px solid red",
        width: "100%"

    }

}))
export const TextBox = styled(Box)(({ theme }) => ({
    minWidth: "700px",
    [theme.breakpoints.down("md")]: {
        minWidth: "450px"
    },
    [theme.breakpoints.down("sm")]: {
        minWidth: "280px"
    }
    // border:"1px solid red",

}))
export const ImageBox = styled(Box)(({ theme }) => ({
    minWidth: "600px",
    minHeight: "300px",
    '& img': {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    },
    [theme.breakpoints.down("md")]: {
        minWidth: "500px",
        minHeight: "100px",
        // border:"1px solid red",
        '& img': {
            width: "100%",
            height: "100%",
            objectFit: "contain"
        },


    },
    [theme.breakpoints.down("sm")]: {
        minWidth: "280px",
        minHeight: "100px",
        // border:"1px solid red",
        '& img': {
            width: "100%",
            height: "100%",
            objectFit: "contain"
        },


    }
}))

export const HeadingStyling = styled(Typography)(() => ({

    color: Colors.primary,
    textTransform: "uppercase"
}))
export const StyledDivider = styled(Divider)(() => ({


    height: "600px",
    border: `0.045px solid ${Colors.divider}`,




}))

export const FiguresBox = styled(Container)(({ theme }) => ({
    minWidth: "400px",
    // border:"1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderLeft: `0.25px solid ${Colors.divider}`,

    [theme.breakpoints.down("lg")]: {
        borderLeft: "transparent",
      padding:"0",
      flexDirection:'row',
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
        borderLeft: "transparent",
        // border: "1px solid red",
        flexDirection:"column",
        minWidth: "280px",
        textAlign: "center",
        padding:"0"
    }
    // alignItems:"center"


}))

export const EachFigureBox = styled(Box)(({ theme }) => ({


    [theme.breakpoints.down("md")]: {
        // border: "1px solid red",
        // background: Colors.darkBlack,
        // marginBottom: "10px",
        padding:"10px"

    },
    [theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        background: Colors.darkBlack,
        marginBottom: "10px",
        padding:"20px"

    }



}))