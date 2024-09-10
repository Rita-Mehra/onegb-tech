import React from 'react';
import ServiceSection from "../../../components/ServiceSection";
import { development } from '../../../data/servicesData';

const index = () => {
  return (
    <div>
      <ServiceSection serviceName="development" serviceDescription="Secure, high quality code is just the start. We consider all the little details so your site is comprehensive. We take an innovative approach to make your site fast, secure, and reliable every step of the way." data={development} height="600px"/>
    </div>
  )
}

export default index;
