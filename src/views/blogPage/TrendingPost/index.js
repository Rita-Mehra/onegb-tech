import React from 'react';
import { Colors } from "../../../styles/theme"
import SectionsHeading from "../../../components/SectionsHeading";
import UpdateCard from "../../../components/UpdateCard";
import UpdateImg1 from "../../../Assets/UpdateImg1.png";
import UpdateImg2 from "../../../Assets/UpdateImg2.png";
import UpdateImg3 from "../../../Assets/UpdateImg3.png";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { List, ListItem, ListItemIcon, ListItemText, Divider, Typography, CardHeader, Avatar, Pagination } from '@mui/material';
import { StyledContainer, StyledBox, MoreCards, LeftSide, RightSide, LeftUpper, LeftDown, ListBox, StoriesCard,TopStories,PaginationBox,StyledPagination } from "../../../styles/blogPage/TrendingPost";

const index = () => {



  const arr = [{
    id: 1,
    img: UpdateImg1,
    updateHeading: "Some Useful Links for You to Get Started",
    updateDescription: "It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."


  },
  {
    id: 2,
    img: UpdateImg2,
    updateHeading: "Some Useful Links for You to Get Started",
    updateDescription: "It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."


  },
  {
    id: 3,
    img: UpdateImg3,
    updateHeading: "Some Useful Links for You to Get Started",
    updateDescription: "It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."


  },
  {
    id: 4,
    img: UpdateImg3,
    updateHeading: "Some Useful Links for You to Get Started",
    updateDescription: "It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."


  },
  {
    id: 5,
    img: UpdateImg3,
    updateHeading: "Some Useful Links for You to Get Started",
    updateDescription: "It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."
  },



  {
    id: 6,
    img: UpdateImg3,
    updateHeading: "Some Useful Links for You to Get Started",
    updateDescription: "It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."


  },
  {
    id: 7,
    img: UpdateImg3,
    updateHeading: "Some Useful Links for You to Get Started",
    updateDescription: "It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."


  },
  {
    id: 8,
    img: UpdateImg3,
    updateHeading: "Some Useful Links for You to Get Started",
    updateDescription: "It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."


  }

  ]
  const listItem = ["Designing", "Developing", "Digital Marketing", "Social Media"]

  const stories = [
    {
      title: 'Reference site about Lorem Ipsum, giving information...',
      date: 'Sep 22, 2022',
      imageSrc: UpdateImg1.src,
    },
    {
      title: 'Reference site about Lorem Ipsum, giving information...',
      date: 'Sep 22, 2022',
      imageSrc: UpdateImg1.src,
    },
    {
      title: 'Reference site about Lorem Ipsum, giving information...',
      date: 'Sep 22, 2022',
      imageSrc: UpdateImg1.src,
    },
    {
      title: 'Reference site about Lorem Ipsum, giving information...',
      date: 'Sep 22, 2022',
      imageSrc: UpdateImg1.src,
    },
 ];

 

  return (<StyledContainer maxWidth="xl">
    <SectionsHeading mainHeading="Trending Posts" />

    <StyledBox>
      {
        arr.slice(0, 3).map((i) => (
          <UpdateCard key={i.id} img={i.img} updateHeading={i.updateHeading} updateDescription={i.updateDescription} />
        ))
      }

    </StyledBox>
    <MoreCards>
      <LeftSide>
        <LeftUpper>
          {arr.length > 3 && (
            <UpdateCard
              key={arr[3].id}
              img={arr[3].img}
              updateHeading={arr[3].updateHeading}
              updateDescription={arr[3].updateDescription}
            />
          )}
        </LeftUpper>
        <LeftDown>
          {
            arr.slice(4).map((i) => (
              <UpdateCard key={i.id} img={i.img} updateHeading={i.updateHeading} updateDescription={i.updateDescription} />
            ))
          }
        </LeftDown>
       <PaginationBox>
       <StyledPagination count={3} shape="rounded" />
       </PaginationBox>
       

      </LeftSide>
      <RightSide>
        <ListBox>
          <List>
            {listItem.map((item, index) => (
              <>

                <ListItem key={index} >

                  <ListItemIcon>
                    <ArrowRightIcon sx={{ color: Colors.primary }} />
                  </ListItemIcon>
                  <ListItemText primary={<Typography sx={{ fontWeight: "300" }}>{item}</Typography>} />

                </ListItem>
                {index < listItem.length - 1 && (
                  <Divider component="li" variant="middle" sx={{ background: Colors.font }} />
                )}
              </>

            ))}

          </List>
        </ListBox>
        <TopStories>
          <Typography variant="h6" sx={{padding:"16px"}}>Top Stories</Typography>
        {stories.map((story, index) => (
        <StoriesCard key={index}>
          <CardHeader
            avatar={
              <Avatar aria-label="top-stories" variant="square" src={story.imageSrc} alt="img" sx={{ width: 70, height: 70 }} />
            }
            title={
              <Typography variant='body2' sx={{ lineHeight: "17px" }}>
                {story.title}
              </Typography>
            }
            subheader={
              <Typography sx={{ fontSize: "10px", color: Colors.primary }}>
                {story.date}
              </Typography>
            }
          />
        </StoriesCard>
      ))}
        </TopStories>
      </RightSide>
    </MoreCards>
    {/* <SectionsHeading mainHeading="Recent Viewed" /> */}
    {/* <StyledBox>
      {
        arr.slice(0, 3).map((i) => (
          <UpdateCard key={i.id} img={i.img} updateHeading={i.updateHeading} updateDescription={i.updateDescription} />
        ))
      }

    </StyledBox> */}

  </StyledContainer>

  )
}

export default index
