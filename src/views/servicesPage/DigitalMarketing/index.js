import React from 'react';
import ServiceSection from "../../../components/ServiceSection";
import { digitalMarketing } from '../../../data/servicesData';

const index = () => {
  return (
    <div>
      <ServiceSection serviceName="digital marketing" serviceDescription="Expert advice goes a really long way on a complex project. Let our experts help guide the way through technical advice and direction, problem solving, and infrastructure consulting. How can our Strategy Team help you?" data={digitalMarketing} height="600px"/>
    </div>
  )
}

export default index
