import React from "react";
import { Link } from "react-router-dom";
import logo from './about_img.jpg';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img id="footerimg" src={logo}></img>
                        </div>
                        <div className="col-md-3">
                            <div><h5>Useful Links :</h5></div>
                            <ul type="square">
                                <li>
                                    <a className="linkedit" href="/home">Home</a>
                                </li>
                                <li>
                                    <a className="linkedit" href="/about">About Us</a>
                                </li>
                                <li>
                                    <a className="linkedit" href="/contact">Contact Us</a>
                                </li>

                            </ul>

                        </div>
                        <div className="col-md-3">
                            <div><h5>Follow Us :</h5></div>
                            <ul type="none">
                                <li>
                                    <a className="linkedit" href="www.linkedin.com/in/pushpak-gulkari-b11141201"><i class="fa-brands fa-linkedin follow"></i>LinkedIn</a>
                                </li>
                                <li>
                                    <a className="linkedit" href="#"><i class="fa-brands fa-twitter follow"></i>Twitter</a>
                                </li>
                                <li>
                                    <a className="linkedit" href="#"><i class="fa-brands fa-instagram follow"></i>Instagram</a>
                                </li>
                                <li>
                                    <a className="linkedit" href="#"><i class="fa-brands fa-youtube follow"></i>Youtube</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div><h5>Address :</h5></div>
                            <ul type="none">
                                <li>
                                    <a className="linkedit" href="#"><i class="fa-solid fa-location-dot follow"></i>Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</a>
                                </li>
                                <li>
                                    <a className="linkedit" href="#"><i class="fa-solid fa-phone follow"></i>+91 9954865324</a>
                                </li>
                                <li>
                                    <a className="linkedit" href="#"><i class="fa-solid fa-envelope follow"></i>homelyheavens@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <p id="copyright"><i class="fa-sharp fa-solid fa-copyright follow"></i>Copyright by @cdacmumbai</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer