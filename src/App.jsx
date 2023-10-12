import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Resources from "./components/Resources";
import About from "./components/About";
import Form from "./components/Form";

import ParticlesBg from 'particles-bg';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      route:"home"
    }
  }
 
  changeRoute=(newroute)=>{
    this.setState({route: newroute})
  }
  
  showMenu=()=>{
    let navlinks = document.getElementsByClassName("navlinks")[0];
    navlinks.classList.toggle("showMenu");
  }

  render(){
    if(this.state.route === "home"){
      return(
        <div className="overflow-hidden">
          <Navbar changeRoute={this.changeRoute} showMenu={this.showMenu}/>
          <Home />
          <Contact changeRoute={this.changeRoute}/>
          <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
        </div>
      )
    }
    else if(this.state.route === "projects"){
      return(
        <div className="bgf1 overflow-hidden">
          <Navbar changeRoute={this.changeRoute} showMenu={this.showMenu}/>
          <Projects />
          <Contact changeRoute={this.changeRoute}/>
        </div>
      )
    }
    else if(this.state.route === "events"){
      return(
        <div className="bgf1 overflow-hidden">
          <Navbar changeRoute={this.changeRoute} showMenu={this.showMenu}/>
          <Events />
          <Contact changeRoute={this.changeRoute}/>
        </div>
      )
    }
    else if(this.state.route === "resources"){
      return(
        <div className="bgf1 overflow-hidden">
          <Navbar changeRoute={this.changeRoute} showMenu={this.showMenu}/>
          <Resources />
          <Contact changeRoute={this.changeRoute}/>
        </div>
      )
    }
    else if(this.state.route === "about"){
      return(
        <div className="bgf1 overflow-hidden">
          <Navbar changeRoute={this.changeRoute} showMenu={this.showMenu}/>
          <About />
          <Contact changeRoute={this.changeRoute}/>
        </div>
      )
    }
    else if(this.state.route === "contact"){
      return(
        <div className="bgf1 overflow-hidden">
          <Navbar changeRoute={this.changeRoute} showMenu={this.showMenu}/>
          <Form />
          <Contact changeRoute={this.changeRoute}/>
        </div>
      )
    }
    else{
      return(
        <div className="overflow-hidden">
          <Navbar changeRoute={this.changeRoute} showMenu={this.showMenu}/>
          <Home />
          <Contact changeRoute={this.changeRoute}/>
          <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
        </div>
      )
    }
  }
}
export default App;

