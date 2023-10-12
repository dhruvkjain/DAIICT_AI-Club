import React from "react";
import "./Contact.css";
import instalogo from "../assets/instalogo.png"
import linkedinlogo from "../assets/linkedinlogo.png"

const Contact =({changeRoute})=>{
    return(
        <div className="contact uppercase w-screen mt-8 h-[82vh]">
            <div className="grid grid-cols-3 h-fit p-[8vw] pl-[12vw] pr-[12vw]">
                <div className="h-fit mt-[8px]">
                    <p>CONTACT US</p>
                    <div className="socials grid grid-rows-2">
                    <a className="w-fit" href="https://www.instagram.com/daiict.ai.club/">
                        <img className="w-fit" src={instalogo}></img>
                    </a>
                    <a className="w-fit" href="https://www.linkedin.com/in/ai-club-a98355242/">
                        <img className="w-fit" src={linkedinlogo}></img>
                    </a>
                    </div>
                </div>
                <div className="links h-fit">
                    <p className="link cursor-pointer h-fit" onClick={()=>changeRoute("home")}>HOME</p>
                    <p className="link cursor-pointer h-fit" onClick={()=>changeRoute("events")}>EVENTS</p>
                    <p className="link cursor-pointer h-fit" onClick={()=>changeRoute("projects")}>PROJECTS</p>
                    <p className="link cursor-pointer h-fit" onClick={()=>changeRoute("about")}>ABOUT US</p>
                    <p className="link cursor-pointer h-fit" onClick={()=>changeRoute("resources")}>RESOURCES</p>
                    <p className="link cursor-pointer h-fit" onClick={()=>changeRoute("contact")}>CONTACT US</p>
                </div>
                <div className="ml-[35px] mt-[8px] text-center h-fit">
                    Made by Dhruv K Jain
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
            <div className="flex justify-center text-center mt-14">Copyright © 2023 AI CLUB DA-IICT. All Rights Reserved</div>
        </div>
    )
}

export default Contact;