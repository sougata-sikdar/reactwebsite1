import React from "react";
import Footer from "./Footer";

const Contact = () => {

    return (
        <>
         <div className="row">
                    <div className="col-7 mx-auto">
                        <h1 className="text-capitalize text-center text-info p-2">contact us now</h1>
                                                    <form>
                                                    <div className="form-row">
                                                        <div className="col py-3">
                                                        <label for="inputEmail4">Name</label>
                                                        <input type="text" className="form-control" placeholder="Your's name"/>
                                                        </div>
                                                      
                                                    </div>
                                                    </form>


                                                    <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                <label for="inputEmail4">Email</label>
                                                <input type="email" className="form-control" id="inputEmail4"/>
                                                </div>
                                                
                                            </div>
                                            <div className="form-group">
                                                <label for="inputAddress">Address</label>
                                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                            </div>
                                           
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                <label for="inputCity">City</label>
                                                <input type="text" className="form-control" id="inputCity"/>
                                                </div>
                                                <div className="form-group col-md-12">
                                                <label for="inputState">State</label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                                </div>
                                                
                                            </div>
                                            <div className="form-group py-3">
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                <label className="form-check-label" for="gridCheck">
                                                    Check me out
                                                </label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary  mx-auto">Sign in</button>
                                            </form>
                    </div>
                    </div>
       
                                <br></br><br></br>

       <Footer />
        </>
    );
};
export default Contact;