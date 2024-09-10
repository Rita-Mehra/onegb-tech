import React,{useState} from 'react';
import {Colors} from "../../../styles/theme";
import SectionsHeading from '../../../components/SectionsHeading';

import PortfolioCard from "../../../components/PortfolioCard";
import { Box,Tabs, Tab } from '@mui/material';
import { PortfolioContainer,TabsBox,StyledTabPanel,StyledTabContext } from "../../../styles/portfolioPage/Portfolio";
import Portfolio from "../../../Assets/Portfolio.png";

import { TabPanel, TabContext } from '@mui/lab';


const index = () => {

  const tabsArr = [{ id: "1", label: "All", value: "1" },
  { id: "2", label: "Web Portfolio", value: "2" },
  { id: "3", label: "Mobile Portfolio", value: "3" },
  { id: "4", label: "Backend", value: "4" },
  { id: "5", label: "Branding", value: "5" },
  { id: "6", label: "SEO", value: "6" },
  ];

  const portfolioData = [{id:1,heading:"We developed an Restaurant Website for socializing with like-minded people by participating in engaging events.",
  description:"A location-based social media application that provides people with an effortless way to connect and socialize with like-minded individuals through exciting social gatherings.",
  img:Portfolio,value:"1", 
  },{id:1,heading:"We developed an Restaurant Website for socializing with like-minded people by participating in engaging events.",
  description:"A location-based social media application that provides people with an effortless way to connect and socialize with like-minded individuals through exciting social gatherings.",
  img:Portfolio,value:"2", 
  },{id:1,heading:"We developed an Restaurant Website for socializing with like-minded people by participating in engaging events.",
  description:"A location-based social media application that provides people with an effortless way to connect and socialize with like-minded individuals through exciting social gatherings.",
  img:Portfolio,value:"3", 
  },
  {id:1,heading:"We developed an Restaurant Website for socializing with like-minded people by participating in engaging events.",
  description:"A location-based social media application that provides people with an effortless way to connect and socialize with like-minded individuals through exciting social gatherings.",
  img:Portfolio,value:"2", 
  },
  {id:1,heading:"We developed an Restaurant Website for socializing with like-minded people by participating in engaging events.",
  description:"A location-based social media application that provides people with an effortless way to connect and socialize with like-minded individuals through exciting social gatherings.",
  img:Portfolio,value:"5", 
  },
  {id:1,heading:"We developed an Restaurant Website for socializing with like-minded people by participating in engaging events.",
  description:"A location-based social media application that provides people with an effortless way to connect and socialize with like-minded individuals through exciting social gatherings.",
  img:Portfolio,value:"6", 
  },
  {id:1,heading:"We developed an Restaurant Website for socializing with like-minded people by participating in engaging events.",
  description:"A location-based social media application that provides people with an effortless way to connect and socialize with like-minded individuals through exciting social gatherings.",
  img:Portfolio,value:"1", 
  }

]

  const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <Box>
      <SectionsHeading mainHeading="Our Featured Portfolio" description="Each website we craft has a distinctive charm that effectively builds trust and addresses buyers' doubts. We are meticulous in conveying the value you offer that deeply resonates with your audience's desires, needs, concerns, and fears.Your new RJP.design website is sure to leave a lasting impression on your visitors." parawidth="850px" />
      <StyledTabContext value={value}>
          <TabsBox>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="scrollable auto tabs example"
              textColor={Colors.white}
              TabIndicatorProps={{
                style: {
                  backgroundColor: Colors.primary
                }
              }}
            >
              {
                tabsArr.map((item) => (
                  <Tab key={item.id} label={item.label} value={item.value} />

                ))
              }
            </Tabs>


          </TabsBox>
      <PortfolioContainer>
       {
        <StyledTabPanel value={value}>
        {value === "1" ? (
            portfolioData.map((i, index) => (
                <PortfolioCard key={index} id={i.id} description={i.description} heading={i.heading} img={i.img} index={index} />
            ))
        ) : (
            portfolioData.map((i, index) => {
                if (i.value === value) {
                    return (
                        <PortfolioCard key={index} id={i.id} description={i.description} heading={i.heading} img={i.img} index={index} />
                    );
                }
                return null;
            })
        )}
    </StyledTabPanel>
    
      
       }
      

      </PortfolioContainer>
      </StyledTabContext>


    </Box>
  )
}

export default index
