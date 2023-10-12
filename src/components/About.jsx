import React from "react";
import "./About.css";
import clubimg from "../assets/2023aiclub.jpg";
import Aayush from "../assets/members/Aayush.png";
import DhruvS from "../assets/members/DhruvS.png";
import Jash from "../assets/members/Jash.png";
import Kunj from "../assets/members/Kunj.png";
import Shravil from "../assets/members/Shravil.png";
import dkj from "../assets/dkj.png";

const About = () => {
    return (
        <div>
            <p className="ap ml-[6vw] mr-[6vw] text-center">
                We're on a mission to educate and raise awareness about AI and its applications.
            </p>

            <div className="flex justify-center items-center flex-wrap">
                <div className="flex justify-center items-center">
                    <div>
                    <p className="cm p-10 uppercase pb-0 text-blue-500 text-center">Convenor</p>
                    <div className="flex justify-center items-center pb-10">
                    <div className="horline"></div>
                    </div>
                    
                    <div className="about flex justify-center items-center flex-wrap ml-[12vw] mr-[12vw]">
                    <div class="myCard m-4">
                        <div class="innerCard">
                            <div class="frontSide">
                                <img className="w-[180px] rounded-[50%]" src={DhruvS}></img>
                                <p>B.Tech ICT</p>
                                <p>1st year</p>
                                <p>Hover to know more</p>
                            </div>
                            <div class="backSide">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                <a href="">PROFILE</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            
                <div>
                    <p className="cm p-10 pb-0 uppercase text-blue-500 text-center">Deputy Convenor</p>
                    <div className="flex justify-center items-center pb-10">
                    <div className="horline"></div>
                    </div>
                    <div className="about flex justify-center items-center flex-wrap ml-[12vw] mr-[12vw]">
                    
                    <div class="myCard m-4">
                    <div class="innerCard">
                        <div class="frontSide">
                            <img className="w-[180px] rounded-[50%]" src={Aayush}></img>
                            <p>B.Tech ICT</p>
                            <p>1st year</p>
                            <p>Hover to know more</p>
                        </div>
                        <div class="backSide">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="">PROFILE</a>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>


            
            <p className="cm p-10 pb-0 text-blue-500 text-center">CORE MEMBERS</p>
            <div className="flex justify-center items-center pb-10">
            <div className="horline"></div>
            </div>
            <div className="about flex justify-center items-center flex-wrap ml-[12vw] mr-[12vw]">
            

            <div class="myCard m-4">
            <div class="innerCard">
                <div class="frontSide">
                    <img className="w-[180px] rounded-[50%]" src={Kunj}></img>
                    <p>B.Tech ICT</p>
                    <p>1st year</p>
                    <p>Hover to know more</p>
                </div>
                <div class="backSide">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="">PROFILE</a>
                </div>
            </div>
            </div>

            <div class="myCard m-4">
            <div class="innerCard">
                <div class="frontSide">
                    <img className="w-[180px] rounded-[50%]" src={Jash}></img>
                    <p>B.Tech ICT</p>
                    <p>1st year</p>
                    <p>Hover to know more</p>
                </div>
                <div class="backSide">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="">PROFILE</a>
                </div>
            </div>
            </div>

            <div class="myCard m-4">
            <div class="innerCard">
                <div class="frontSide">
                    <img className="w-[180px] rounded-[50%]" src={Shravil}></img>
                    <p>B.Tech ICT</p>
                    <p>1st year</p>
                    <p>Hover to know more</p>
                </div>
                <div class="backSide">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="">PROFILE</a>
                </div>
            </div>
            </div>

            <div class="myCard m-4">
            <div class="innerCard">
                <div class="frontSide">
                    <img className="w-[180px] rounded-[50%]" src={dkj}></img>
                    <p>B.Tech ICT</p>
                    <p>1st year</p>
                    <p>Hover to know more</p>
                </div>
                <div class="backSide">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="">PROFILE</a>
                </div>
            </div>
            </div>

            </div>





            <p className="asm p-10 pb-0 text-blue-500 text-center">ASSOCIATE MEMBERS</p>
            <div className="flex justify-center items-center pb-10">
            <div className="horline"></div>
            </div>
            <div className="about flex justify-center items-center flex-wrap ml-[12vw] mr-[12vw]">
            
            <div class="myCard m-4">
            <div class="innerCard">
                <div class="frontSide">
                    <img className="w-[180px] rounded-[50%]" src={dkj}></img>
                    <p>B.Tech ICT</p>
                    <p>1st year</p>
                    <p>Hover to know more</p>
                </div>
                <div class="backSide">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="">PROFILE</a>
                </div>
            </div>
            </div>

            <div class="myCard m-4">
            <div class="innerCard">
                <div class="frontSide">
                    <img className="w-[180px] rounded-[50%]" src={dkj}></img>
                    <p>B.Tech ICT</p>
                    <p>1st year</p>
                    <p>Hover to know more</p>
                </div>
                <div class="backSide">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="">PROFILE</a>
                </div>
            </div>
            </div>

            <div class="myCard m-4">
            <div class="innerCard">
                <div class="frontSide">
                    <img className="w-[180px] rounded-[50%]" src={dkj}></img>
                    <p>B.Tech ICT</p>
                    <p>1st year</p>
                    <p>Hover to know more</p>
                </div>
                <div class="backSide">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="">PROFILE</a>
                </div>
            </div>
            </div>

            <div class="myCard m-4">
            <div class="innerCard">
                <div class="frontSide">
                    <img className="w-[180px] rounded-[50%]" src={dkj}></img>
                    <p>B.Tech ICT</p>
                    <p>1st year</p>
                    <p>Hover to know more</p>
                </div>
                <div class="backSide">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="">PROFILE</a>
                </div>
            </div>
            </div>
            <div class="myCard m-4">
            <div class="innerCard">
                <div class="frontSide">
                    <img className="w-[180px] rounded-[50%]" src={dkj}></img>
                    <p>B.Tech ICT</p>
                    <p>1st year</p>
                    <p>Hover to know more</p>
                </div>
                <div class="backSide">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="">PROFILE</a>
                </div>
            </div>
            </div>

            </div>


            <p className="asm p-10 pb-0 pt-40 text-blue-500 text-center">2023 AI CLUB</p>
            <div className="flex justify-center items-center pb-10">
            <div className="horline"></div>
            </div>
            <div className="flex justify-center items-center ">
            <img src={clubimg} className="clubimg overflow-hidden rounded-2xl m-6 max-w-[500px]"></img>
            </div>
        </div>
    )
}
export default About;