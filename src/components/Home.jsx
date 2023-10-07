import React from "react";
import "./Home.css";
import clubimg from "../assets/2023aiclub.jpg";
import Tilt from 'react-parallax-tilt';

const Home =()=>{
    return(
        <div className="w-screen flex justify-center items-center overflow-hidden">
            <Tilt className="tilt w-fit overflow-hidden"><div className="w-screen flex justify-center items-center overflow-hidden h-[calc(100vh-150px)]">
            <img src={clubimg} className="clubimg overflow-hidden rounded-2xl m-6 w-[500px]"></img>
            </div></Tilt>
            <div className="intro absolute">
            <p className="text-[4.5vw] font-bold">Welcome To</p>
            <p className="text-[4.5vw]  font-bold"><span className="text-[#fb8500]">AI CLUB</span> DA-IICT</p>
            <p className="text-[4.5vw] font-bold">It’s not <span className="text-[#f361ce]">magic</span>, it’s <span className="text-[#ffb703]">AI</span></p>
            </div>
        </div>
    )
}

export default Home;