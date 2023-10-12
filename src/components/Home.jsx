import React from "react";
import "./Home.css";
import clubimg from "../assets/2023aiclub.jpg";
import aiclub from "../assets/aiclub2.mp4";
import Tilt from 'react-parallax-tilt';

const Home =()=>{
    return(
        <div>
        <div className="w-screen flex justify-center items-center overflow-hidden">
            <Tilt className="tilt w-fit overflow-hidden"><div className="w-screen flex justify-center items-center overflow-hidden h-[calc(100vh-17.5vh)]">
            <video src={aiclub} className="video overflow-hidden rounded-2xl m-6" poster={clubimg} autoPlay loop muted>
            </video>
            </div></Tilt>
            <div className="intro absolute">
            {/* <p className="text-[5vw] font-bold">Welcome To</p>
            <p className="text-[5vw] font-bold"><span className="text-[#fb8500]">AI CLUB</span> DA-IICT</p>
            <p className="text-[5vw] font-bold">It’s not <span className="text-[#f361ce]">magic</span>, it’s <span className="text-[#ffb703]">AI</span></p> */}
            <p className="intro2 font-bold"><span className="text-[#f79012]">learn</span></p>
            <p className="intro2 font-bold"><span className="text-[#f361ce] text-left">research</span></p>
            <div></div>
            <a href="#whatwedomain"><button class="button-85">know more</button></a>
            <p className="intro2 font-bold"><span className="text-[#ffb703]">build</span></p>
            </div>
        </div >
        
        <div id="whatwedomain" className="w-screen h-screen flex justify-center items-center">
            <div className="whatwedobody leading-10 p-[10vw] pt-5 pb-[4vw]"> 
                <p className="whatwedotitle uppercase pb-[4vw] text-blue-500 text-center">
                What We do
                </p>
                <div className="flex justify-center items-center pb-10">
                <div className="horline"></div>
                </div>  
                <p className="whatwedo">
                • Learn about Al through lectures, workshops, and hands-on projects.
                </p>
                <p className="whatwedo">
                • To cultivate interest among students in Artificial Intelligence.
                </p>
                <p className="whatwedo">
                • Network with other students and professionals who are interested in AI.
                </p>
                <p className="whatwedo">
                • Develop your skills in machine learning, natural language processing, and other areas of AI.
                </p>
            </div> 
        </div>

        </div>
    )
}

export default Home;