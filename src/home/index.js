import React, { useState } from "react";

import NavBar from "../nav/nav-bar";
import SideBar from "../nav/mobile";
import Collection from "./collections";
import FirstSlider from "./sliders/FirstSlider";
import Catalogue from "./catalogue";
import About from "./about";

import styles from "./home.module.css";

import to_top from "../assets/icons/to-top.svg";

const Home = ({sideBar}) => {
    return(
        <div className={styles.home}>
            <a href="#to_top" className={styles.to_top}>
                <img src={to_top}/>
            </a>
            <FirstSlider/>
            <Collection/>
            <Catalogue/>
            <About/>
        </div>
    )
}

export default Home;