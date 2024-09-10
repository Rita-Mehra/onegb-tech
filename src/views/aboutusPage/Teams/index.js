import React from 'react';
import SectionsHeading from "../../../components/SectionsHeading";
import TeamsCard from "../../../components/TeamsCard";
import { Container,Box } from '@mui/material';
import {TeamsContainer,CardsBox} from "../../../styles/aboutusPage/Teams";
import Avatar1 from '../../../Assets/Avatar1.png';
import Avatar2 from '../../../Assets/Avatar2.jpg';
import Avatar3 from '../../../Assets/Avatar3.jpg';

const index = () => {
    const arr=[{id:1, field:"Project managers", description:"They manage the agile web development process from the beginning to finish.",teamMembers:[{
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
]
    

},
    {id:2, field:"UX/UI specialists", description:"Build the custom user interface and guarantee an enhanced user experience.",teamMembers:[{
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
]},

    {id:3, field:"Technical leads", description:"These experts define the tech development vector and evaluate the rightness of tech solutions.",teamMembers:[{
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
]},

    {id:4, field:"Developers", description:"Bring ideas into a code, guided by the design and prescribed tech requirements.",teamMembers:[{
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
]},

    {id:5, field:"DevOps engineers", description:"Their responsibilities are to automate tasks related to configuring and deploying applications.",teamMembers:[{
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
]},

    {id:6, field:"QA Specialists", description:"They enhance the web development processes and detect errors in the digital product.",teamMembers:[{
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
    {
        img:Avatar1,
        name:"Tina R. Forbes",
        post:"Junior ui Designer"
    },
]}
]
  return (
    <TeamsContainer maxWidth="xl">
        {/* <SectionsHeading mainHeading="Reliable team for" subheading="Project Success" description="A skilled software development team is the most vital part of the success of any business. And we put together the best professionals!"/>
        <CardsBox>
            {
                arr.map((item)=>(
                    <TeamsCard key={item.id}  field={item.field} description={item.description} teamMembers={item.teamMembers} />
                ))
            }
           
            
        </CardsBox> */}

        
      
    </TeamsContainer>
  )
}

export default index
