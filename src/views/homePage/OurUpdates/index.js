//'use client';
import React from 'react'
import SectionsHeading from "../../../components/SectionsHeading";
import UpdateCard from "../../../components/UpdateCard";

import UpdateImg1 from "../../../Assets/UpdateImg1.png";
import UpdateImg2 from "../../../Assets/UpdateImg2.png";
import UpdateImg3 from "../../../Assets/UpdateImg3.png";



import { StyledContainer,StyledBox,ButtonCover } from "../../../styles/homepage/OurUpdates";



const index = () => {
  const arr=[{
    id:1,
    img:UpdateImg1,
    updateHeading:"Some Useful Links for You to Get Started",
    updateDescription:"It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."
   

  },
  {
    id:2,
    img:UpdateImg2,
    updateHeading:"Some Useful Links for You to Get Started",
    updateDescription:"It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."
   

  },
  {
    id:3,
    img:UpdateImg3,
    updateHeading:"Some Useful Links for You to Get Started",
    updateDescription:"It seems like you’re running a default WordPress website. Here are a few useful links to get you started: Migration How to use WordPress ..."
   

  }
]
  return (
    <StyledContainer>
        <SectionsHeading mainHeading="Our Updates" description="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."/>
        <StyledBox>
          {
            arr.map((i)=>(
              <UpdateCard key={i.id} img={i.img} updateHeading={i.updateHeading} updateDescription={i.updateDescription}  />
            ))
          }
      
        </StyledBox>
      
    </StyledContainer>
    
  )
}

export default index
