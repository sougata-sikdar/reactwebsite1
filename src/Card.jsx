import React from "react";
import "./Cssmain.css";
import { NavLink } from 'react-router-dom';
const Card = (props) => {

    return (
        <>
             <div className ="col-md-4 col-10 mx-auto">

                                                <div className ="card mb-3">
                            <img src={props.imgsrc} className ="card-img-top img-fluid card_image" alt={props.imgsrc}/>
                            <div className ="card-body">
                                <h5 className ="card-title">{props.title}</h5>
                                <p className ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                               
                                <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
                            </div>
                            </div>

           </div>                
     
        </>
    );
};
export default Card;