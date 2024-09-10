import React from 'react';
import Image from 'next/image';
import SectionsHeading from "../../../components/SectionsHeading";
import Button from "../../../components/Button";
import Award1 from "../../../Assets/Award1.png";
import Award2 from "../../../Assets/Award2.png";
import Award3 from "../../../Assets/Award3.png";
import Award4 from "../../../Assets/Award4.png";
import Award5 from "../../../Assets/Award5.png";
import Award6 from "../../../Assets/Award6.jpeg";
import Award7 from "../../../Assets/Award7.png";
import Award8 from "../../../Assets/Award8.png";
import Award9 from "../../../Assets/Award9.png";
import {AwardsContainer,AwardCover,AwardBox,ButtonCover} from "../../../styles/aboutusPage/Awards";
import { Box } from '@mui/material';




const index = () => {
    const arr =[Award1,Award2,Award3,Award4,Award5,Award6,Award7,Award8,Award9]
//   return (
//     <AwardsContainer maxWidth="xl">
//         <SectionsHeading mainHeading="Awards and recognitions" description="A skilled software development team is the most vital part of the success of any business. And we put together the best professionals!"/>
//         <AwardBox>
//             {
//                 arr.map((i)=>(
//                     <AwardCover>
//                     <Image src={i} alt="img"/>
//                 </AwardCover>
//                 ))
//             }
       
//         </AwardBox>
      
//         <ButtonCover>
//         <Button name="VIEW DETAIL INFO"/>
//         </ButtonCover>
       

      
//     </AwardsContainer>
//   )
}

export default index
