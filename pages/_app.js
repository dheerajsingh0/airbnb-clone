import Footer from "../components/Footer"
import "../styles/globals.css"
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router"

const progress=new ProgressBar({
  size:8,
  color:"#FE595E",
  className:"z-100",

});
Router.events.on("routeChangeStart",progress.start);
Router.events.on("routeChangeComplete",progress.finish);
Router.events.on("routeChangeError",progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <>
 
    <Component {...pageProps} />
    <Footer/>
    </>
    ) 
}

export default MyApp
