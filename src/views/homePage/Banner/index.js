import React from 'react';
import Image from 'next/image';
import BannerImg from "../../../../public/images/onegb-banner.png";
import BannerBase from "../../../Assets/Base.png";
import Navbar from "../../../components/Navbar";
import { Stack, Typography, Box } from '@mui/material';
import { StyledBox, StyledTypography, StyledTypographyMain, Heading, StyledLink, ImageBox,ImageWrap,ImageBaseWrap,HeadingTextBox } from "../../../styles/homepage/Banner";
// import Bannerbg from "../../../Assets/BannerBg.png";
import Link from 'next/link';




const index = () => {
    return (
        // <StyledBox>
            <Heading>
            {/* <Navbar/> */}
            <HeadingTextBox>

         

                <StyledTypographyMain variant='h6' component="h6">Empowering Business Through Customized
                </StyledTypographyMain>
                <StyledTypography variant='h6'>Software Solutions</StyledTypography>
                <StyledLink href="/about-us"> VIEW MORE</StyledLink>
                <ImageBox>
                    <ImageWrap>
                        <Image src={BannerImg} alt="img" unoptimized width={400} height={470}/>
                    </ImageWrap>
                    <ImageBaseWrap>
                        <Image src={BannerBase} alt="img" unoptimized width={800} height={100}  />
                    </ImageBaseWrap>

</ImageBox>
</HeadingTextBox>
            </Heading>
           



        // </StyledBox>
    )
}

export default index
