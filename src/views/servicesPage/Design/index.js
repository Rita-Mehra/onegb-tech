import React from 'react';
import {design} from "../../../data/servicesData";
import ServiceSection from "../../../components/ServiceSection";


const index = () => {
  return (
    <div>
     <ServiceSection serviceName="design" serviceDescription="Custom design services aren’t something we do for you, but something we do together. We do more than create a look. We connect with you and help you next-level your brand. Let’s create a digital footprint for your company that converts. Discover our approach." data={design} direction="row-reverse" degree="190" height="500px"/>
    </div>
  )
}

export default index
