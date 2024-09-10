import React from 'react';
import Intro from "../views/aboutusPage/Intro";
import CoreValue from "../views/aboutusPage/CoreValue"; 
import Leaders from "../views/aboutusPage/Leaders";
import Teams from "../views/aboutusPage/Teams";
import Awards from "../views/aboutusPage/Awards";
import Partners from "../views/aboutusPage/Partners";
import FreeConsultation from "../components/FreeConsultation";
import PageSubheader from "../components/PageSubheader";


const aboutUs = () => {
  return (
    <div>
    
      <Intro />
      <CoreValue/>
      <Leaders/>
      <Teams/>
      <Awards/>
      <Partners/>
      <FreeConsultation/>



    </div>
  )
}

export default aboutUs;
