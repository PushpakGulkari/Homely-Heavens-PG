import React from "react";
import imgp from './pushpak.jpg'
import imgan from './Ankita.jpg'
import imgaj from './Ajinkya.jpg'


function Aboutus() {
    return (
        <div className="container box">
            <div className="row titlebar">
                <p id="title">ABOUT US....</p>
            </div>
            <div className="row">
                <div className="col-md-6 one d-flex align-items-center justify-content-center text-center">
                    <img id="pushpakimg" src={imgp}></img>
                </div>
                <div className="col-md-6 two">
                    <p>"Say goodbye to the PG hassle! We've conquered the challenges so you can effortlessly find your perfect paying guest accommodation with us!"</p>
                    <h3>- Pushpak Gulkari</h3>
                    <p>From Yavatmal, Maharashtra</p>
                    <a className="linkedit" href="www.linkedin.com/in/pushpak-gulkari-b11141201"><i class="fa-brands fa-linkedin follow"></i>www.linkedin.com/in/pushpak-gulkari-b11141201</a><br></br>
                    <a className="linkedit" href="gulkaripushpak@gmail.com"><i class="fa-solid fa-envelope follow"></i>gulkaripushpak@gmail.com</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 three">
                    <p>"We've curated the best PGs after meticulous research, so you can easily find your ideal home on our platform. Your comfort is our commitment!"</p>
                    <h3>- Ankita Pareek</h3>
                    <p>From Pune, Maharashtra</p>
                    <a className="linkedit" href="linkedin.com/in/ankita-pareek-8648211a0"><i class="fa-brands fa-linkedin follow"></i>linkedin.com/in/ankita-pareek-8648211a0</a><br></br>
                    <a className="linkedit" href="ankitacdac23@gmail.com"><i class="fa-solid fa-envelope follow"></i>ankitacdac23@gmail.com</a>
                </div>
                <div className="col-md-6 four d-flex align-items-center justify-content-center text-center">
                    <img id="ankitaimg" src={imgan}></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 five d-flex align-items-center justify-content-center text-center">
                    <img id="ajinkyaimg" src={imgaj}></img>
                </div>
                <div className="col-md-6 six">
                    <p>"So we welcome you to your path to happiness! Discover the perfect paying guest with ease on our website - your key to a happy, hassle-free living experience!"</p>
                    <h3>- Ajinkya Dhumal</h3>
                    <p>From Mumbai, Maharashtra</p>
                    <a className="linkedit" href="linkedin.com/in/ajinkya-dhumal-0a29ba211"><i class="fa-brands fa-linkedin follow"></i>linkedin.com/in/ajinkya-dhumal-0a29ba211</a><br></br>
                    <a className="linkedit" href="mdhumal68@gmail.com"><i class="fa-solid fa-envelope follow"></i>mdhumal68@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Aboutus