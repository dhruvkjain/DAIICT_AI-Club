import React from "react";
import "./Contact.css";
import instalogo from "../assets/instalogo.png"
import linkedinlogo from "../assets/linkedinlogo.png"

const Contact =({changeRoute})=>{
    return(
        <div className="contact uppercase w-screen mt-8 h-[82vh]">
            <div className="grid grid-cols-3 p-[8vw] pl-[12vw] pr-[12vw]">
                <div>
                    <h1>Contact Us</h1>
                    <div className="socials grid grid-rows-2">
                    <a className="w-fit" href="https://www.instagram.com/daiict.ai.club/">
                        <img className="w-fit" src={instalogo}></img>
                    </a>
                    <a className="w-fit" href="https://www.linkedin.com/in/ai-club-a98355242/">
                        <img className="w-fit" src={linkedinlogo}></img>
                    </a>
                    </div>
                </div>
                <div className="links grid grid-rows-6">
                    <p className="cursor-pointer" onClick={()=>changeRoute("home")}>Home</p>
                    <p className="cursor-pointer" onClick={()=>changeRoute("events")}>Events</p>
                    <p className="cursor-pointer" onClick={()=>changeRoute("projects")}>Projects</p>
                    <p className="cursor-pointer" onClick={()=>changeRoute("about")}>About Us</p>
                    <p className="cursor-pointer" onClick={()=>changeRoute("resources")}>Resources</p>
                    <p className="cursor-pointer" onClick={()=>changeRoute("contact")}>Contact Us</p>
                </div>
                <div>
                    Made by Dhruv Jain
                </div>
            </div>
            <div class="pyramid-loader">
                <div class="wrapper">
                    <span class="side side1"></span>
                    <span class="side side2"></span>
                    <span class="side side3"></span>
                    <span class="side side4"></span>
                    <span class="shadow"></span>
                </div>  
            </div>
            <div className="flex justify-center mt-14">Copyright © 2023 AI CLUB DA-IICT. All Rights Reserved</div>
        </div>
    )
}

export default Contact;