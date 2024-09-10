import { Stack } from '@mui/material'
import React from 'react';
import SectionsHeading from "../../../components/SectionsHeading";
import {UniquenessStack ,UniquenessContainer,HeadingBox} from '../../../styles/servicePage/Uniqueness';
import UniquenessCard from "../../../components/UniquenessCard";

const index = () => {
    const highlights = [{id:1,heading:"Reduce costs and launch fast", body:"Our development process is fully transparent and efficient, enabling us to deliver your software solution on time and within the budget."},

    {id:2,heading:"Obtain expert recommendations", body:"Having built multiple custom web applications, our skilled team provides the best solution for your business issues."},

    {id:3,heading:"Dedicated team that cares", body:"We are proud of our result-oriented team that prioritizes transparency and communication and focuses on high-value relationships that continue."},

    {id:4,heading:"The right solution meeting your needs", body:"Client success is our main aim. We thoroughly align your business needs with software functionality to provide the best value."},

    {id:5,heading:"The best practice standards", body:"We keep us with all industry trends and optimize our software development and quality assurance process according to the latest standards."},

  

    {id:6,heading:"Maintenance & support after the launch", body:"Our assistance doesn’t stop when your software product goes live. Codica’s reliable support team will ensure your platform works smoothly."},
]
  
  return (
    <UniquenessStack>
      <HeadingBox>
      <SectionsHeading mainHeading="Why you should choose OneGB Tech for your software development services"/> 
      </HeadingBox>
      
       <UniquenessContainer>
        {
            highlights.map((item)=>(
                <UniquenessCard key={item.id} head ={item.heading} body={item.body}/>
            ))
        }
       </UniquenessContainer>

      
    </UniquenessStack>
  )
}

export default index
