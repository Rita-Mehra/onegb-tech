import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {Colors} from "../../styles/theme";
import MobileNavLogo from "../../Assets/MobileNav.png";
import MobileNavBase from "../../Assets/MobileNavBase.png";
import { Box } from '@mui/material';
import {
  Email,
  X,
  LinkedIn,
  Instagram,
  Facebook,
  Call,
 

} from '@mui/icons-material';
import { MobileNavStack,TextBox,ImageBox,MyListMobile,StyledListItemTextMobile,StyledAvatar,AvatarBox } from "../../styles/Navbar";


const navbarMobile = (props) => {
  const router = useRouter()
 

  const arr =[
    {name:"HOME", route:"/"},
    {name:"ABOUT US", route:"/about-us"},
    {name:"SERVICES", route:"/services"},
    // {name:"PORTFOLIO", route:"/portfolio"},
    {name:"BLOG", route:"/blog"}
  ]


  const arrSocial = [ { id: 2, icon: Facebook, color: Colors.info, link:"https://www.facebook.com/themagiicians/"}, { id: 3, icon: Instagram, color: Colors.primary,  link:"https://www.instagram.com/magiicians?igsh=MndtOTV3YTRlOTU2" }, { id: 4, icon: LinkedIn, color: Colors.warning,  link:"https://www.linkedin.com/company/the-magiicians/?originalSubdomain=in" },{ id: 5, icon: X, color: Colors.secondary,  link:"https://twitter.com/magiicians" }]



  const handleItemClick = (route) => {
    props.handleClick(false); // Close the mobile navigation drawer
    router.push(route); // Redirect to the selected page
  }

  const isActive = (route) => {
    return router.pathname === route;
  }
  return (
    <MobileNavStack>
      {/* <ImageBox>

        <Image src={MobileNavLogo.src} alt='img' width={60} height={60}  unoptimized></Image>
      </ImageBox> */}
    {/* <TextBox>

      <Image src={MobileNavBase.src} alt='img'  width={60} height={60}  unoptimized></Image>
    </TextBox> */}
    <MyListMobile>
          {
            arr.map((i, index) => (
              <StyledListItemTextMobile key={index} primary={i.name}   onClick={() => handleItemClick(i.route)}  active={isActive(i.route)}  />

            ))
          }
        </MyListMobile>
        {/* <AvatarBox>
            {
              arrSocial.map((i) => (
                <Link href="#" key={i.id} target = '_blank'>
                  <StyledAvatar style={{ background: i.color }} >
                  {i.icon && <i.icon  sx={{ fontSize: '14px' }} />}
                  </StyledAvatar>
                </Link>
              ))
            }
          </AvatarBox> */}
    </MobileNavStack>
  )
}

export default navbarMobile
