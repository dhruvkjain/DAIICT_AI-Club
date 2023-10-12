import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import Tilt from 'react-parallax-tilt';

const Navbar =({changeRoute , showMenu})=> {

    
    return(
        <div className="navbar grid overflow-hidden">

        <Tilt className="w-fit"><div className="navbg bg-white bg-opacity-20 backdrop-blur-4xl rounded-2xl m-3 w-fit h-auto text-center">
            <div><img className="ailogo p-2" src={logo}></img></div>
        </div></Tilt>

        <div>
        <img onClick={showMenu} className="cursor-pointer m-4 w-[50px] float-right" src={menu}></img>
            <div className="flex overflow-hidden justify-center items-center">
                <div className="navlinks m-4 overflow-hidden uppercase h-auto">
                    <a onClick={()=>changeRoute("home")} className="navlink bg-white bg-opacity-20 backdrop-blur-4xl rounded-2xl cursor-pointer flex justify-center items-center">Home</a>
                    <a onClick={()=>changeRoute("events")} className="navlink bg-white bg-opacity-20 backdrop-blur-4xl rounded-2xl cursor-pointer flex justify-center items-center">Events</a>
                    <a onClick={()=>changeRoute("projects")} className="navlink bg-white bg-opacity-20 backdrop-blur-4xl rounded-2xl cursor-pointer flex justify-center items-center">Projects</a>
                    <a onClick={()=>changeRoute("resources")} className="navlink bg-white bg-opacity-20 backdrop-blur-4xl rounded-2xl cursor-pointer flex justify-center items-center">Resources</a>
                    <a onClick={()=>changeRoute("about")} className="navlink bg-white bg-opacity-20 backdrop-blur-4xl rounded-2xl cursor-pointer flex justify-center items-center">About Us</a>
                    <a onClick={()=>changeRoute("contact")} className="navlink bg-white bg-opacity-20 backdrop-blur-4xl rounded-2xl cursor-pointer flex justify-center items-center">Contact Us</a>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Navbar;