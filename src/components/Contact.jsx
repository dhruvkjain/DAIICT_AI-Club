import React from "react";
import "./Contact.css";
import instalogo from "../assets/instalogo.png"
import linkedinlogo from "../assets/linkedinlogo.png"

const Contact =()=>{
    return(
        <div className="contact w-screen mt-8 h-[82vh]">
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
                <div className="links grid grid-rows-4">
                    <a href="">Home</a>
                    <a href="">Events</a>
                    <a href="">Projects</a>
                    <a href="">About Us</a>
                </div>
                <div>
                    QR code
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
            <div className="flex justify-center mt-14 items-baseline">Copyright © 2023 AI CLUB DA-IICT. All Rights Reserved</div>
        </div>
    )
}

export default Contact;