import React from "react";
import ReactDOM from "react-dom";


const Time = () => {
const Today= new Date().toLocaleDateString();
const CurTime= new Date().toLocaleTimeString();

let CurDate= new Date();
CurDate= CurDate.getHours();

let greeting = "";
const cssStyle = {};

if (CurDate >= 1 && CurDate < 12)
{
    greeting = "Good Morning..Have a nice Day!!";
    cssStyle.color = "green";
}
else if (CurDate >= 12 && CurDate < 19)
{
    greeting = "Good Afternoon..Have a nice Day!!";
    cssStyle.color = "Orange";
}
else 
{
    greeting = "Good Evening.!!";
    cssStyle.color = "blue";
}



    return (
        <>
        <h1 className="ml-0 text-center">Hello, <span style={cssStyle}> {greeting}</span></h1>
        
        <h4 className="ml-0 text-center">Today is: {Today} , now- {CurTime} </h4>
        </>
    );
};
export default Time;