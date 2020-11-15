import React from "react";
import firstimg from "../src/images/offer.png";
import Common from "./Common";
import Time from "./Time";
import Footer from "./Footer";
const Home = () => {

    return (
        <>
        <Time/>
        <Common name="Grow Your Business with"
        imgsrc={firstimg}
        visit="/About"
        btname="Get Started" />
       <Footer />
        </>
    );
};
export default Home;