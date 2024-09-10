import React,{useState} from 'react';
import Image from 'next/image';
import ComingSoon from "../../../components/ComingSoon";
import { Colors } from "../../../styles/theme";
import SectionsHeading from "../../../components/SectionsHeading";
import BestCoding from "../../../Assets/BestCoding.png";
import Experience from "../../../Assets/Experience.png";
import Affordable from "../../../Assets/Affordable.png";
import TestimonialImg from "../../../Assets/Testimonial.png";
import AvatarImg from "../../../Assets/Avatar.png";
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';


// import CardHeader from '@mui/material/CardHeader'

import { Typography, Container, Box, CardContent, Card, CardHeader, Avatar, IconButton, CardMedia, CardActionArea, Button } from '@mui/material';
import { StyledBox, UspBox, UspDetail1, UspDetail2, UspDetail3, StarBox, UpsText,ImageCover, ExperienceCard, CardContainer, CoverBox, CardHeaders, TitleDesign, HeadingMain, SubHeading, CardContext, ProjectCard, Testimonials, StyleCardMedia, YoutubeCard,YTCardActionArea, YouTubeCardHeader, YTTypography, YTSubhead, YTCardContent } from "../../../styles/homepage/Uniqueness";





const index = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const cardData = [{
        id: 1,
        yearsOfExperience: "3+",
        heading: "years of history",
        body: "Founded over three years ago, OneGB Tech has evolved from a small startup into a leading digital agency. Our journey has been marked by growth, innovation, and a commitment to delivering exceptional results for our clients.",
        borderTopLeft: '25px',
        borderTopRight: "125px",
        borderBottomLeft: "25px",
        borderBottomRight: "25px",
        color: Colors.secondary


    },
    {
        id: 2,
        yearsOfExperience: "5+",
        heading: "Type of digital services",
        body: "OneGB Tech offers a diverse range of digital services, including web development, SEO, PPC, social media marketing, and content creation. Our comprehensive approach ensures your brand excels across all digital channels and achieves measurable success. ",
        borderTopLeft: '25px',
        borderTopRight: "25px",
        borderBottomLeft: "25px",
        borderBottomRight: "25px",
        color: Colors.primary
    },
    {
        id: 3,
        yearsOfExperience: "25+",
        heading: `HAPPY CLIENTS`,
        body: "OneGB Tech  is proud to have over 30+ happy clients who trust us for their digital needs. Our commitment to excellence and client satisfaction drives us to deliver outstanding results and foster long-term partnerships.",
        borderTopLeft: '125px',
        borderTopRight: "25px",
        borderBottomLeft: "25px",
        borderBottomRight: "25px",
        color: Colors.warning
    }
    ]
    return (

        <StyledBox>
            <SectionsHeading 
            mainHeading="How We Different" 
            subheading="From Others" 
            description="At OneGB Tech, we pride ourselves on delivering exceptional IT services that set us apart from the competition. Our commitment to innovation, customer-centric solutions, and a highly skilled team ensures that we not only meet but exceed our clients' expectations." 
            />
            <UspBox>
                <StarBox>


                    <UspDetail1>
                        <ImageCover>

                        <Image src={BestCoding} alt="img" width={50} height={50}  />
                        </ImageCover>
                        <UpsText variant="body1" textAlign="center" >Best Coding <br />
                            practices</UpsText>


                    </UspDetail1>
                    <UspDetail2>
                            
                            
                        <ImageCover>
                        <Image src={Experience} alt="img" width={50} height={50}  />
                        </ImageCover>

                        <UpsText variant="body1" textAlign="center" >Experienced & high<br />
                            skill team</UpsText>
                    </UspDetail2>
                    <UspDetail3>
                    <ImageCover>

                        <Image src={Affordable} alt="img"width={50} height={50}  />
                    </ImageCover>
                        <UpsText variant="body1" textAlign="center" >Affordable
                            <br />
                            price
                        </UpsText>
                    </UspDetail3>
                </StarBox>

            </UspBox>

            <CardContainer>
                <CoverBox>{
                    cardData.map((i) => (
                        <ExperienceCard key={i.id} borderTopLeft={i.borderTopLeft} borderTopRight={i.borderTopRight} borderBottomLeft={i.borderBottomLeft} borderBottomRight={i.borderBottomRight} color={i.color}>
                            <CardHeaders


                                title={
                                    <TitleDesign>
                                        <HeadingMain variant="h1">{i.yearsOfExperience}</HeadingMain>
                                        <SubHeading variant="h6">{i.heading}</SubHeading>
                                    </TitleDesign>
                                }


                            />
                            <CardContent>
                                <CardContext variant="body2" color="initial">{i.body}</CardContext>

                            </CardContent>
                        </ExperienceCard>
                    ))
                }

                </CoverBox>
                <CoverBox>
                    <ProjectCard>
                        <CardHeader


                            title={
                                <TitleDesign>
                                    <HeadingMain variant="h1">40+</HeadingMain>
                                    <SubHeading variant="h6" sx={{ paddingRight: "200px" }}>PROJECTS
                                        DELIVERED</SubHeading>
                                </TitleDesign>
                            }

                        />

                        <CardContent>
                            <CardContext variant="body2" color="initial">
                            OneGB Tech  has successfully delivered over 40 projects, showcasing our expertise and dedication. Each project reflects our commitment to quality, innovation, and client satisfaction, driving impactful results and strengthening our reputation in the industry.
                            </CardContext>

                        </CardContent>

                    </ProjectCard>

                    {/* <Testimonials>
                        <CardHeader
                            sx={{ padding: "10px 16px" }}
                            title={<Typography variant='h6'> Testimonials </Typography>}
                        />
                        <CardContent sx={{ padding: "0px 16px" }}>

                            <StyleCardMedia title="" image={TestimonialImg.src} component="img" />
                            <CardContext variant="body2">
                                lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                lorem Ipsum is simply dummy text of the printing and typesetting
                            </CardContext>
                        </CardContent>
                        <YoutubeCard onClick={handleOpen} >
                            <YTCardActionArea>

                            <YouTubeCardHeader
                                avatar={
                                    <Avatar alt="Remy Sharp" src={AvatarImg.src} />


                                }

                                title={

                                    <YTTypography  >ARCHIT TIWARI</YTTypography>

                                }

                                // title="Shrimp and Chorizo Paella"
                                subheader={
                                    <YTSubhead variant='body2'>CEO</YTSubhead>
                                }
                            />
                            <YTCardContent>
                                <Typography variant="body2" sx={{color:Colors.primary}} >Watch Video</Typography>
                                <Box component="span" sx={{color:Colors.primary, display:"flex", alignItems:"center", justifyContent:"center"}}><PlayCircleFilledRoundedIcon sx={{fontSize:"50px", }}  /></Box>
                            </YTCardContent>




                            </YTCardActionArea>
                        </YoutubeCard>
                        {open && <ComingSoon handleOpen={handleOpen} handleClose={handleClose} open={open} />}

                    </Testimonials> */}

                </CoverBox>
            </CardContainer>

        </StyledBox>
    )
}

export default index

