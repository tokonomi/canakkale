import React, { useState } from "react";

import NavBar from "./nav-bar";
import SideBar from "../mobile/side-bar";
import Collection from "./collections";
import FirstSlider from "./sliders/FirstSlider";
import Catalogue from "./catalogue";
import About from "./about";

import styles from "./home.module.css";

import to_top from "../assets/icons/to-top.svg";

const Home = () => {
    const [sideBar, setSideBar] = useState(false);
    return(
        <div className={styles.home} style={{height: sideBar ? '100vh' : 'inherit'}}>
            <div className={styles.to_top}></div>
            <div className={sideBar ? styles.dark_shade : styles.light_shade}>
                <img src={to_top}/>
            </div>
            <SideBar setSideBar={setSideBar} sideBar={sideBar}/> 

            <NavBar sideBar={sideBar} setSideBar={setSideBar}/>
            <FirstSlider/>
            <Collection/>
            <Catalogue/>
            <About/>
        </div>
    )
}

export default Home;