import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import Tilt from 'react-parallax-tilt';

const Navbar =()=> {
    return(
        <div className="navbg bg-white bg-opacity-20 backdrop-blur-4xl rounded-2xl m-3 grid h-auto grid-cols-3 text-center">
            <div><Tilt className="w-fit"><img className="w-[100px] p-2" src={logo}></img></Tilt></div>
            <div className="navlinks grid col-span-2 h-auto grid-cols-6">
                <a href="" className="flex justify-center items-center">Home</a>
                <a href="" className="flex justify-center items-center">Events</a>
                <a href="" className="flex justify-center items-center">Projects</a>
                <a href="" className="flex justify-center items-center">Resources</a>
                <a href="" className="flex justify-center items-center">About Us</a>
                <a href="" className="flex justify-center items-center">Contact Us</a>
            </div>
        </div>
    )
}

export default Navbar;