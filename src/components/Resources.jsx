import React from "react";
import Search from "./Search";
import "./Resources.css";
import dkj from "../assets/dkj.png";

const Resources =()=>{
    return(
        <div className="mt-12">
            <h1 className="rh1 uppercase flex justify-center items-center pb-8 ml-[12vw] mr-[12vw]">Here are some Resources which we have used and found helpful</h1>
            <Search searchfield={"Search Resources"}/>
            <div className="blog ml-[6vw] mr-[6vw] mt-8">
                <div className="relative"><img className="blogimg" src={dkj}></img></div>
                <div class="card ml-6">
                    <div class="card2 p-4 w-full h-full flex justify-center items-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla non harum quod ullam eos excepturi, at dolor ad, adipisci porro. Maxime tempore ad earum voluptas in, aliquid odio consequuntur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod cum velit numquam, minima non dolore molestias eligendi blanditiis eum explicabo. Numquam, fugiat officia at dolore in ipsa cumque vero.
                    </div>
                </div>
            </div>
            <div className="blog ml-[6vw] mr-[6vw] mt-8">
                <div className="relative"><img className="blogimg" src={dkj}></img></div>
                <div class="card ml-6">
                    <div class="card2 p-4 w-full h-full flex justify-center items-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla non harum quod ullam eos excepturi, at dolor ad, adipisci porro. Maxime tempore ad earum voluptas in, aliquid odio consequuntur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod cum velit numquam, minima non dolore molestias eligendi blanditiis eum explicabo. Numquam, fugiat officia at dolore in ipsa cumque vero.
                    </div>
                </div>
            </div>
            <div className="blog ml-[6vw] mr-[6vw] mt-8">
                <div className="relative"><img className="blogimg" src={dkj}></img></div>
                <div class="card ml-6">
                    <div class="card2 p-4 w-full h-full flex justify-center items-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla non harum quod ullam eos excepturi, at dolor ad, adipisci porro. Maxime tempore ad earum voluptas in, aliquid odio consequuntur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod cum velit numquam, minima non dolore molestias eligendi blanditiis eum explicabo. Numquam, fugiat officia at dolore in ipsa cumque vero.
                    </div>
                </div>
            </div>
            <div className="blog ml-[6vw] mr-[6vw] mt-8">
                <div className="relative"><img className="blogimg" src={dkj}></img></div>
                <div class="card ml-6">
                    <div class="card2 p-4 w-full h-full flex justify-center items-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla non harum quod ullam eos excepturi, at dolor ad, adipisci porro. Maxime tempore ad earum voluptas in, aliquid odio consequuntur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod cum velit numquam, minima non dolore molestias eligendi blanditiis eum explicabo. Numquam, fugiat officia at dolore in ipsa cumque vero.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources;