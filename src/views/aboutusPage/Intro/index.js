import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

import { Colors } from "../../../styles/theme";
import AboutIntro from "../../../Assets/AboutIntro.png";
import { IntroContainer, TextBox, FiguresBox, ImageBox,HeadingStyling,EachFigureBox } from "../../../styles/aboutusPage/Intro";
import { Typography, Box,Divider } from '@mui/material'









const index = () => {
  const figureArr = [{ id: 1, sign:"",size: "50", start:"0", description: "Team size", color: Colors.primary },
  { id: 2, sign:"",size: "45", start:"0", description: "Successful Projects Delivered", color: Colors.white },
  { id: 3, sign:"\u0024",size: "56", start:"0", description: "MLN Raised by our startup clients", color: Colors.secondary },
  { id: 4, sign:"",size: "2020", start:"2020",description: "Founded", color: Colors.warning }]

  return (
    <IntroContainer maxWidth="xl">
      <TextBox>
        <Typography variant="h6" gutterBottom 
      >About Us</Typography>
        <Typography variant="body2" style={{marginBottom:"16px"}}>Why our clients choose us for their project?</Typography>

        <ImageBox >
          <Image src={AboutIntro} alt="img" />
        </ImageBox >
        <Typography variant="body2"  sx={{marginBottom:"16px"}}>At OneGB Tech, we specialize in custom WordPress development, creating tailored websites that reflect your brand's identity and meet your unique business requirements. Our team of experienced WordPress developers is dedicated to delivering high-quality, secure, and scalable solutions that enhance your online presence and drive engagement.</Typography>
        <HeadingStyling variant="subtitle1"  >
          Specialization
        </HeadingStyling>
        <Typography variant="h5"  sx={{marginBottom:"16px"}}>
          Custom web product development
        </Typography>
        <HeadingStyling variant="subtitle1" >
          Development team
        </HeadingStyling>
        <Typography variant="h5"  >
          Gurugram, India
        </Typography>


      </TextBox>
      {/* <StyledDivider  variant="middle"/> */}
      <FiguresBox>
        {figureArr.map((item, index) => (
          <EachFigureBox key={item.id}>
            {index !== figureArr.length - 1 ? (
              <Typography variant="h2" color={item.color} sx={{ fontFamily: "Oswald, sans-serif" }}>
                {item.sign}
                <CountUp start={0} end={item.size} duration={5} />+
              </Typography>
            ) : (
              <Typography variant="h2" color={item.color} sx={{ fontFamily: "Oswald, sans-serif" }}>
                {item.size}
              </Typography>
            )}
            <Typography variant="body2">{item.description}</Typography>
          </EachFigureBox>
        ))}
      </FiguresBox>
      {/* <FiguresBox>
        {
          figureArr.map((item) => (
            <EachFigureBox key={item.id}>


              <Typography variant="h2" color={item.color} sx={{fontFamily:"Oswald, sans-serif"}}>
                {item.sign}
                <CountUp start={0} end={item.size} duration={2.75}/>
                </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </EachFigureBox>
          ))
        }

      </FiguresBox> */}

    </IntroContainer>
  )
}

export default index
