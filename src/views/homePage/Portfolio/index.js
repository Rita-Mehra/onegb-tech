import React,{useState} from 'react';
import ComingSoon from "../../../components/ComingSoon";
import { useRouter } from 'next/navigation'
import { Colors } from "../../../styles/theme";
import SectionHeading from "../../../components/SectionsHeading";
import Button from "../../../components/Button";

import portfolioImg1 from "../../../Assets/PortfolioImg1.png";
import portfolioImg2 from "../../../Assets/PortfolioImg2.png";

import { Typography, Card, CardContent, Box, CardMedia } from '@mui/material';
import { StyledStack, TextCard, ImageCard, CoverBox, ExploreButton,ButtonCover } from "../../../styles/homepage/Portfolio";





const index = () => {
  //state for coming soom modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const router = useRouter();
  const handlePortfolio=()=>{
    router.push('/portfolio')
  }
  const arr = [{
    id: 1,
    cardTitle: "Workshalas",
    cardDescription: "Workshala is a vibrant coworking space to be in love with what you do. We know what it takes to be more productive for corporates, budding freelancers & startups to set up the ventures.At Workshala, Feel the environment of Positive coworking and give us a chance to help you with the best coworking space in Noida.",
    portImage: portfolioImg1,
    rowDirection: "row"


  },
  {
    id: 2,
    cardTitle: "Workshalas",
    cardDescription: "Workshala is a vibrant coworking space to be in love with what you do. We know what it takes to be more productive for corporates, budding freelancers & startups to set up the ventures.At Workshala, Feel the environment of Positive coworking and give us a chance to help you with the best coworking space in Noida.",
    portImage: portfolioImg2,
    rowDirection: "row-reverse"


  }


  ]

  return (

    <StyledStack>
      <SectionHeading style={{ marginTop: '30px' }} mainHeading="Visit Our Portfolio" description="Explore our diverse range of projects that showcase our creativity, expertise, and commitment to excellence. From innovative designs to impactful solutions, our portfolio reflects our ability to meet the unique needs of our clients. Discover how we bring ideas to life and drive success through our work." />
      {arr.map((i) => (
        <CoverBox key={i.id} sx={{flexDirection:i.rowDirection}}>
          <TextCard>
            <CardContent>
              <Typography variant="h5">{i.cardTitle}</Typography>
              <Typography variant="body2">{i.cardDescription}</Typography>
            </CardContent>
          </TextCard>
          <ImageCard>
            <CardMedia component="img" image={i.portImage.src} alt="img" />
            <ExploreButton variant='contained'  onClick={handleOpen}> Explore</ExploreButton>
          </ImageCard>
          {open && <ComingSoon handleOpen={handleOpen} handleClose={handleClose} open={open} />}
        </CoverBox>
      ))}
    
        <ButtonCover>
    <Button name="VIEW MORE" passingprop={handlePortfolio}/>
    </ButtonCover>
    </StyledStack>
  
  )
}

export default index
