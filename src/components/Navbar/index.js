import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Logo from "../../../public/images/onegb-logo.svg";
import StyledButton from "../Button";
import { Call,Menu } from '@mui/icons-material';
import { Avatar,IconButton,Drawer } from '@mui/material'
import { MyList,StyledAppBar,StyledListItemText,StyledBox,StyledDivider,StyledToolbar } from "../../styles/Navbar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {Colors} from "../../styles/theme";
import MobileNavbar from "./navbarMobile";


const navbarDesktop = () => {
  const [navbarColor, setNavbarColor]= useState(false);
  const router = useRouter();
  const theme = useTheme();

  // nav list items
  const arr =[
    {name:"HOME", route:"/"},
    {name:"ABOUT US", route:"/about-us"},
    {name:"SERVICES", route:"/services"},
    // {name:"PORTFOLIO", route:"/portfolio"},
    {name:"BLOG", route:"/blog"}]

  // for showing showing hamburger on mobile and tablet screen sizes
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  // for opening and closing of the drawer in the mobile and tablet screen
  const [showMobileNav, setShowMobileNav] = useState(false)
  const handleClick=(newOpen)=>{
    setShowMobileNav(newOpen)
  }

 // route for redirecting on the contacts page
  const contactPage = ()=>{
    router.push("/contact")
  }

  // for changing color of the active link in the navbar
   const isActive = (route) => {
      return router.pathname === route;
    }

    // for changing navbar background color according to the screen scroll

    useEffect(() => {
      const handleNavbarColor = () => {
        if (window.scrollY >= 80) {
          setNavbarColor(true);
        } else {
          setNavbarColor(false);
        }
      };
  
      // Attach the event listener when the component mounts
      window.addEventListener('scroll', handleNavbarColor);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleNavbarColor);
      };
    }, []); // Empty dependency array ensures this effect runs only once

  // for deciding on only on the home page the color of the navbar is transparent elsewhere it has color.
  const isHomePage= router.pathname==="/"
 
  return (
    <StyledAppBar navbarColor={navbarColor} isHomePage={isHomePage}>
      <StyledToolbar>
        {
          matches? <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => handleClick(true)}

        >
          <Menu />
        </IconButton>:null
        }
        <StyledBox className="mobile-logo">
        <Image src={Logo} alt="Logo" className="mobile-logo" height={90} width={90} unoptimized onClick={() => router.push('/')}/>
        </StyledBox>
       
        <MyList>
          {
            arr.map((i, index) => (
              <StyledListItemText key={index} primary={i.name} onClick={() => router.push(i.route)}
              active={isActive(i.route)} 

              />

            ))
          }


        </MyList>
        {
          matches? <IconButton>
          <Avatar sx={{ background: Colors.primary, width:"30px", height:"30px"}} onClick={() => router.push('/contact')} >
            <Call style={{ color: Colors.white }} fontSize="sm"/>
          </Avatar>
        </IconButton>:  <StyledButton name="Contact " icon={Call}  passingprop={contactPage} />
        }
      
       


      </StyledToolbar>
      <StyledDivider/>
      <Drawer anchor="top" open={showMobileNav} onClose={() => handleClick(false)}
  transitionDuration={400}>
        <MobileNavbar handleClick={handleClick} />
      </Drawer>

    </StyledAppBar>
  )
}

export default navbarDesktop;
