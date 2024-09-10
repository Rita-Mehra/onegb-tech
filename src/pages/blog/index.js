import React from 'react';
import  ScheduleConsultation from "../../components/FreeConsultation";
import Banner from "../../views/blogPage/Banner";
import TrendingPost from "../../views/blogPage/TrendingPost"

const blog = () => {
  return (
    <div>
      <Banner/>
      <TrendingPost/>
      <ScheduleConsultation/>

    </div>
  )
}

export default blog
