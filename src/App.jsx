import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ParticlesBg from 'particles-bg';

class App extends React.Component{
  constructor(){
    super();
  }
 
  render(){
    return(
      <div className="bgf overflow-hidden">
        <Navbar />
        <Home />
        <Contact />
        <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
      </div>
    )
    
  }
}
export default App;

