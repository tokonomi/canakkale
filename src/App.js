import React, { useState } from "react"
import Home from "./home";
import Footer from "./footer";
import NavBar from "./nav/nav-bar";
import SideBar from "./nav/mobile";

function App() {
  
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="app_screen">
        <div className={sideBar ? 'dark_shade' : 'light_shade'}></div>
        <SideBar setSideBar={setSideBar} sideBar={sideBar}/> 
      

      <NavBar sideBar={sideBar} setSideBar={setSideBar}/>
      <Home sideBar={sideBar} setSideBar={setSideBar}/>
      <Footer/>
    </div> 
  );
}

export default App;
