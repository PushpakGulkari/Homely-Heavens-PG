import React from "react";

function Contactus() {
    return (
        <div className="container color">
            <div className="row">
                <p className="head">CONTACT US</p>
                <div className="col-md-8 left form">
                    <form action="#" className="formcolor">
                        <div className="row">
                            <input className="inputbox" type="text" placeholder="First Name"></input>
                        </div>
                        <br></br>
                        <div className="row">
                            <input className="inputbox" type="text" placeholder="Last Name"></input>
                        </div>
                        <br></br>
                        <div className="row">
                            <input className="inputbox" type="email" placeholder="Email"></input>
                        </div>
                        <br></br>
                        <div className="row">
                            <input className="inputbox" type="number" placeholder="Phone Number"></input>
                        </div>
                        <br></br>
                        <div>
                            <textarea rows="8" cols="22" className="textarea" placeholder="Enter your message here"></textarea>
                        </div>
                        <div>
                            <button className="btn mt-2" style={{color:'white'}} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-4 info">
                    <div>
                        <h2>Call</h2>
                        <a href="+91 9845325132"><i class="fa-solid fa-phone follow"></i>+91 9845325132</a>
                    </div>
                    <br></br>
                    <div>
                        <h2>Email</h2>
                        <a href="homelyheavens@gmail.com"><i class="fa-solid fa-envelope follow"></i>homelyheavens@gmail.com</a>
                    </div>
                    <br></br>
                    <div>
                        <h2>Visit</h2>
                        <i class="fa-solid fa-location-dot follow"></i><p>Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contactus