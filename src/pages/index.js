import{Stack} from "@mui/material";
import Navbar from "../components/Navbar"
import FreeConsultation from "../components/FreeConsultation";
import Footer from "../components/Footer";
import Banner from "../views/homePage/Banner";
import Promotion from "../views/homePage/Promotion";
import Service from "../views/homePage/Services";
import Portfolio from "../views/homePage/Portfolio";
import Updates from "../views/homePage/OurUpdates";
import Uniqueness from "../views/homePage/Uniqueness";
import BannerBg from "../Assets/Bannerbgs.png";





export default function Home() {
  return (
    <Stack style={{ backgroundImage: `url(${BannerBg.src})`,
    backgroundRepeat: "no-repeat",
   
    backgroundSize:"100% 600px",}}>
      
      
        <Navbar/>
      <Banner/>
      
      <Promotion/>
      <Service/>
      <Uniqueness/>
      <Portfolio/>
      {/* <Updates/> */}
      <FreeConsultation/>
      {/* <Footer/> */}



    </Stack>
   
  
  );
}
