import React from "react";
import "./Events.css"
import events from "../assets/events.jpg";

const Events =()=>{
    return(
        <div className="timeline mt-12">

            <div className="flex justify-center items-center ">
            <img src={events} className="clubimg overflow-hidden rounded-2xl m-6"></img>
            </div>
            <div className="flex justify-center items-center pb-10">
            <div className="horline"></div>
            </div>


            <div className="event">
                <div></div>
                <div className="dot col-span-2 translate-x-[-40%]"></div>
                <div data-aos="flip-left">   
                    <div className="eventdetails">
                        <div className="eventtitle">Event Title</div>
                        <div className="eventdes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam accusamus quidem amet illum, explicabo magni incidunt eaque. Molestias laborum consectetur nulla provident dolor blanditiis deleniti, commodi necessitatibus, eum inventore ex?</div>
                        <a className="text-blue-500 cursor-pointer underline eventlink">Find out more</a>
                    </div> 
                </div> 
                <div>
                    <div className="line"></div>
                </div>
                <div className="datetime">
                <div className="text-left mb-6">DATE / TIME</div>
                </div>   
            </div>
            <div className="event">
                <div></div>
                <div className="dot col-span-2 translate-x-[-40%]"></div>
                <div className="datetime">
                <div className="text-right mb-6">DATE / TIME</div>
                </div>
                <div>
                    <div className="last line"></div>
                </div>
                <div data-aos="flip-right">
                    <div className="eventdetails">
                        <div className="eventtitle">Event Title</div>
                        <div className="eventdes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam accusamus quidem amet illum, explicabo magni incidunt eaque. Molestias laborum consectetur nulla provident dolor blanditiis deleniti, commodi necessitatibus, eum inventore ex?</div>
                        <a className="text-blue-500 cursor-pointer underline eventlink">Find out more</a>
                    </div>
                </div>
            </div>
           

            <div className="event">
                <div></div>
                <div className="dot col-span-2 translate-x-[-40%]"></div>
                <div data-aos="flip-left">    
                    <div className="eventdetails">
                        <div className="eventtitle">Event Title</div>
                        <div className="eventdes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam accusamus quidem amet illum, explicabo magni incidunt eaque. Molestias laborum consectetur nulla provident dolor blanditiis deleniti, commodi necessitatibus, eum inventore ex?</div>
                        <a className="text-blue-500 cursor-pointer underline eventlink">Find out more</a>
                    </div> 
                </div> 
                <div>
                    <div className="line"></div>
                </div>
                <div className="datetime">
                <div className="text-left mb-6">DATE / TIME</div>
                </div>
            </div>
            <div className="event">
                <div></div>
                <div className="dot col-span-2 translate-x-[-40%]"></div>
                <div className="datetime">
                <div className="text-right mb-6">DATE / TIME</div>
                </div>
                <div>
                    <div className="last line"></div>
                </div>
                <div data-aos="flip-right">
                    <div className="eventdetails">
                        <div className="eventtitle">Event Title</div>
                        <div className="eventdes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam accusamus quidem amet illum, explicabo magni incidunt eaque. Molestias laborum consectetur nulla provident dolor blanditiis deleniti, commodi necessitatibus, eum inventore ex?</div>
                        <a className="text-blue-500 cursor-pointer underline eventlink">Find out more</a>
                    </div>
                </div>
            </div>


            <div className="event">
                <div></div>
                <div className="dot col-span-2 translate-x-[-40%]"></div>
                <div data-aos="flip-left">    
                    <div className="eventdetails">
                        <div className="eventtitle">Event Title</div>
                        <div className="eventdes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam accusamus quidem amet illum, explicabo magni incidunt eaque. Molestias laborum consectetur nulla provident dolor blanditiis deleniti, commodi necessitatibus, eum inventore ex?</div>
                        <a className="text-blue-500 cursor-pointer underline eventlink">Find out more</a>
                    </div> 
                </div> 
                <div>
                    <div className="line"></div>
                </div>
                <div className="datetime">
                <div className="text-left mb-6">DATE / TIME</div>
                </div>
            </div>
            <div className="event">
                <div></div>
                <div className="dot col-span-2 translate-x-[-40%]"></div>
                <div className="datetime">
                <div className="text-right mb-6">DATE / TIME</div>
                </div>
                <div>
                    <div className="last line"></div>
                </div>
                <div data-aos="flip-right">
                    <div className="eventdetails">
                        <div className="eventtitle">Event Title</div>
                        <div className="eventdes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam accusamus quidem amet illum, explicabo magni incidunt eaque. Molestias laborum consectetur nulla provident dolor blanditiis deleniti, commodi necessitatibus, eum inventore ex?</div>
                        <a className="text-blue-500 cursor-pointer underline eventlink">Find out more</a>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
export default Events;