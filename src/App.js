import React, { useState, useRef, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./home";
import Footer from "./footer";
import NavBar from "./nav/nav-bar";
import SideBar from "./nav/mobile";
import Catalog from "./catalog";

import to_top from "./assets/icons/to-top.svg";
import Portfolio from "./portfolio";
import Showrooms from "./showrooms";
import History from "./history";
import Product from "./catalog/product";

import contact_ck_h_img from "./assets/contacts/ck_h.png"
import contact_k_h_img from "./assets/contacts/k_h.png"
import Admin from "./admin/admin";



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
    <Router>
    <div className="app_screen" id="to_top">
      <a ref={to_top_btn}  href="#to_top" className='to_top'>
        <img src={to_top}/>
      </a>
      <div className={sideBar ? 'dark_shade' : 'light_shade'}></div>
      <SideBar setSideBar={setSideBar} sideBar={sideBar}/> 
      <NavBar sideBar={sideBar} setSideBar={setSideBar}/>
      {/* <Home footer={footer} to_top_btn={to_top_btn} sideBar={sideBar} setSideBar={setSideBar}/> */}
      {/* <Catalog/> */}
      {/* <Portfolio/> */}
      {/* <Showrooms h_img={contact_ck_h_img} text='metn' f_name = 'Çanakkale Seramik' loc='Xətai pr. 43, AZ1008' contact='+994 55 808 03 93' w_time='Bazar ertəsi-Şənbə: 09:00 – 19:00'/> */}
      {/* <Showrooms h_img={contact_k_h_img} text='metn' f_name = 'Kale Seramik' loc='Xətai pr. 158, AZ1008' contact='+994 55 808 03 93' w_time='Bazar ertəsi-Şənbə: 09:00 – 19:00'/> */}
      {/* <History/> */}
      {/* <Product/> */}
      {/* Project */}
      <Switch>
        <Route path="/" exact><Home footer={footer} to_top_btn={to_top_btn} sideBar={sideBar} setSideBar={setSideBar}/></Route>
        <Route path="/katalog"><Catalog/></Route>
        <Route path="/portfolio"><Portfolio/></Route>
        <Route path="/tarix"><History/></Route>
        <Route path="/admin__ck_k"><Admin/></Route>
        <Route path="/k-showroom"><Showrooms h_img={contact_k_h_img} text='metn' f_name = 'Kale Seramik' loc='Xətai pr. 158, AZ1008' contact='+994 55 808 03 93' w_time='Bazar ertəsi-Şənbə: 09:00 – 19:00'/></Route>
        <Route path="/ck-showroom"><Showrooms h_img={contact_ck_h_img} text='metn' f_name = 'Çanakkale Seramik' loc='Xətai pr. 43, AZ1008' contact='+994 55 808 03 93' w_time='Bazar ertəsi-Şənbə: 09:00 – 19:00'/></Route>
      </Switch>
      {/* <Admin/> */}
      <Footer footer={footer}/>
    </div> 
    </Router>
  );
}

export default App;
