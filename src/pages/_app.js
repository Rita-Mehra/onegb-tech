import "../styles/globals.css";
import { useRouter } from 'next/router';

import { ThemeProvider } from "@mui/system";
import { LocalizationProvider } from '@mui/x-date-pickers';
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageSubheader from "../components/PageSubheader";




export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomeOrContactPage = router.pathname === '/' || router.pathname === '/contact';
  const isHomePage= router.pathname==="/"
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider theme={theme}>
      {!isHomePage && <Navbar/>}
      {/* <Navbar/> */}
      {!isHomeOrContactPage && <PageSubheader />}

<Component {...pageProps} />
<Footer/>
    </ThemeProvider>
    </LocalizationProvider>

  )
}
