import React, { useState } from 'react';
import { Colors } from "../../../styles/theme";
import Image from 'next/image';
import SectionsHeading from "../../../components/SectionsHeading";
import Mobile from "../../../Assets/Mobile.svg";
import Frontend from "../../../Assets/Front End.svg";
import Backend from "../../../Assets/Backend.svg";
import Devops from "../../../Assets/Devops.svg";
import Database from '../../../Assets/Database.svg';
import Infrastructure from "../../../Assets/Infrastructure.svg";
import Integrations from "../../../Assets/Integrations.svg";

import { Tabs, Tab, Box } from "@mui/material";
import { TabsBox, ImageBox, TabSection,StyledTabPanel } from "../../../styles/servicePage/Tabs";
import { TabPanel, TabContext } from '@mui/lab';




const index = () => {
    const tabsArr = [{ id: "1", label: "Mobile", value: "1" },
    { id: "2", label: "Front End", value: "2" },
    { id: "3", label: "Database", value: "3" },
    { id: "4", label: "Backend", value: "4" },
    { id: "5", label: "Devops", value: "5" },
    { id: "6", label: "infrastructure", value: "6" },
    { id: "7", label: "Integrations", value: "7" }];

    const showTabs = [{ id: 1, value: "1", img: Mobile }, { id: 2, value: "2", img: Frontend }, { id: 3, value: "3", img: Database }, { id: 4, value: "4", img: Backend }, { id: 5, value: "5", img: Devops }, { id: 6, value: "6", img: Infrastructure }, { id: 7, value: "7", img: Integrations }]

    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabSection>
            <SectionsHeading mainHeading="Skills Directory" description="A skilled software development team is the most vital part of the success of any business. And we put together the best professionals!" />
            <TabContext value={value}>



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
                <ImageBox>

                    {
                        showTabs.map((item) => (
                            <StyledTabPanel key={item.id} value={item.value}>
                                <Image src={item.img.src} alt="img" width={500} height={500} quality={80} />
                            </StyledTabPanel>
                        ))
                    }



                </ImageBox>
            </TabContext>

        </TabSection>
    )
}

export default index
