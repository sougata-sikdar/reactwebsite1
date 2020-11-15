import React from "react";
import firstimg from "../src/images/course.png";
import Card from "./Card";
import Sdata from "./Sdata";
import Footer from "./Footer";
const Service = () => {

    return (
        <>
                 <div className="my-4" >
                        <h1 className="text-capitalize text-center p-2">contact us now</h1>
                    </div>
                    <div className="container-fluid mb-5">
    <div className="row">
    <div className="col-8 mx-auto">
                  <div className="row gy-2" >
                {Sdata.map((value, index) => {
                    return <Card key={index} imgsrc={value.imgsrc} title={value.title} />
                })}
                        </div></div>
                        </div></div> 
       


       <Footer />
        </>
    );
};
export default Service;