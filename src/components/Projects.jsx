import React from "react";
import Search from "./Search";
import ai1 from "../assets/ai1.png"
import ai2 from "../assets/ai2.png"
import ai3 from "../assets/ai3.png"
import ai4 from "../assets/ai4.png"
import "./Projects.css";

class Events extends React.Component{

    render(){
        return(
            <div className="mt-16">
                <Search searchfield={"Search Projects"}/>
                <div className="projects">
                    <div className="project rounded-2xl p-3 mt-5 ml-[7vw] mr-[7vw]">
                    <div className="projectcover bg-black rounded-2xl">
                        <div className="projectimgcover"><img className="projectimg" src={ai4}></img></div>
                        <div className="flex h-fit justify-center items-center">
                        <div>
                        <h1 className="mb-2 projecttitle">Project title</h1>
                        <p className="mb-5 projectbywhom">By whom</p>
                        <p className="projectdes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus sunt eveniet quisquam, accusamus consequuntur, nobis sint quo eaque aliquid numquam nostrum laudantium quis ducimus nihil magni non saepe perferendis.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="project rounded-2xl p-3 mt-5  ml-[7vw] mr-[7vw]">
                    <div className="projectcover p-5 bg-black rounded-2xl">
                        <div className="projectimgcover"><img className="projectimg" src={ai1}></img></div>
                        <div className="flex h-fit justify-center items-center">
                        <div>
                        <h1 className="mb-2 projecttitle">Project title</h1>
                        <p className="mb-5 projectbywhom">By whom</p>
                        <p className="projectdes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus sunt eveniet quisquam, accusamus consequuntur, nobis sint quo eaque aliquid numquam nostrum laudantium quis ducimus nihil magni non saepe perferendis.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="project rounded-2xl p-3 mt-5  ml-[7vw] mr-[7vw]">
                    <div className="projectcover p-5 bg-black rounded-2xl">
                        <div className="projectimgcover"><img className="projectimg" src={ai2}></img></div>
                        <div className="flex h-fit justify-center items-center">
                        <div>
                        <h1 className="mb-2 projecttitle">Project title</h1>
                        <p className="mb-5 projectbywhom">By whom</p>
                        <p className="projectdes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus sunt eveniet quisquam, accusamus consequuntur, nobis sint quo eaque aliquid numquam nostrum laudantium quis ducimus nihil magni non saepe perferendis.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="project rounded-2xl p-3 mt-5  ml-[7vw] mr-[7vw]">
                    <div className="projectcover p-5 bg-black rounded-2xl">
                        <div className="projectimgcover"><img className="projectimg" src={ai3}></img></div>
                        <div className="flex h-fit justify-center items-center">
                        <div>
                        <h1 className="mb-2 projecttitle">Project title</h1>
                        <p className="mb-5 projectbywhom">By whom</p>
                        <p className="projectdes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus sunt eveniet quisquam, accusamus consequuntur, nobis sint quo eaque aliquid numquam nostrum laudantium quis ducimus nihil magni non saepe perferendis.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Events;