import React from 'react';
import SectionsHeading from "../../../components/SectionsHeading";
import ProcessCard from "../../../components/ProcessCard";
import EcommerceMarketing from "../../../Assets/EcommerceMarketing.png";

import {ProcessContainer,ProcessStack} from "../../../styles/servicePage/Process";


const index = () => {
    const processData =[{id:1,img:EcommerceMarketing, processheading:"Discovery", processDescription:"In this step, we actively learn about the needs and goals of the project and thoroughly discuss various solutions and directions to take."},
    {id:2,img:EcommerceMarketing, processheading:"Design", processDescription:"This phase focuses on the creative visual aspect, starting with sketches & wireframes and progressing to the final design of branding or website."},
    {id:3,img:EcommerceMarketing, processheading:"Development", processDescription:"This step involves the technical side, including developing the design of the website on the platform or creating sketches for branding."},
    {id:4,img:EcommerceMarketing, processheading:"Launch", processDescription:"The final step includes completing any necessary revisions, user testing, bug fixes, training, and delivering the product to the client."},]
  return (
    <ProcessStack>
      <SectionsHeading mainHeading="Process" description="A skilled software development team is the most vital part of the success of any business. And we put together the best professionals!"/>
      <ProcessContainer>
      {
        processData.map((i,index)=>(
            <ProcessCard key={i.id} img={i.img} processheading={i.processheading} processDescription={i.processDescription}/>
        ))
      }

      </ProcessContainer>
     
      
      
    </ProcessStack>
  )
}

export default index
