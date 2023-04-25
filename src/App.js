import React, { useState, useRef, useEffect } from "react"
import Home from "./home";
import Footer from "./footer";
import NavBar from "./nav/nav-bar";
import SideBar from "./nav/mobile";
import Catalog from "./catalog";

import to_top from "./assets/icons/to-top.svg";
import Portfolio from "./portfolio";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const footer = useRef();
  const to_top_btn = useRef();
  function checkOffset() {
    if(!to_top_btn.current && !footer.current) return
    if(window.scrollY > (window.innerHeight)){
        to_top_btn.current.style.opacity = '1'
    }else to_top_btn.current.style.opacity = '.0'
    if((window.scrollY + window.innerHeight) >= (document.body.offsetHeight - footer.current.offsetHeight + 120)){
        to_top_btn.current.style.position = 'absolute';
        to_top_btn.current.style.bottom = footer.current.offsetHeight - 120 + 'px';
    }else {
        to_top_btn.current.style.position = 'fixed';
        to_top_btn.current.style.bottom = '20px';
    }
}
window.addEventListener("scroll", function(){
    checkOffset()
})
  return (
    <div className="app_screen" id="to_top">
      <a ref={to_top_btn}  href="#to_top" className='to_top'>
        <img src={to_top}/>
      </a>
      <div className={sideBar ? 'dark_shade' : 'light_shade'}></div>
      <SideBar setSideBar={setSideBar} sideBar={sideBar}/> 
      <NavBar sideBar={sideBar} setSideBar={setSideBar}/>
      {/* <Home footer={footer} to_top_btn={to_top_btn} sideBar={sideBar} setSideBar={setSideBar}/> */}
      {/* <Catalog/> */}
      <Portfolio/>
      <Footer footer={footer}/>
    </div> 
  );
}

export default App;
