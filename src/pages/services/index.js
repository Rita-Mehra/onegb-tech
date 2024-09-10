import React from 'react';

import { Stack } from '@mui/material';
// import ServiceSection from "../../components/ServiceSection";
import FreeConsultation from "../../components/FreeConsultation";
import Development from "../../views/servicesPage/Development";
import Design from "../../views/servicesPage/Design";
import DigitalMarketing from "../../views/servicesPage/DigitalMarketing";
import Process from "../../views/servicesPage/Process";
import Uniqueness from "../../views/servicesPage/Uniqueness";
import Tabs from "../../views/servicesPage/Tabs";

const services = () => {
  return (
    <Stack>
      <Development/>
      <Design/>
      <DigitalMarketing/>
      <Tabs/>
       <Process/>
      <Uniqueness/> 
      <FreeConsultation/>
     

      
    </Stack>
  )
}

export default services
