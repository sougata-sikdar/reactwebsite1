import React from "react";
import firstimg from "../src/images/about.png";
import Common from "./Common";
import Footer from "./Footer";
const About = () => {

    return (
        <>
        <Common name="About Us"
        imgsrc={firstimg}
        visit="/Service"
        btname="Our Services" />
       

       <Footer />
        </>
    );
};
export default About;