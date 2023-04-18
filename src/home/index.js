import React, { useEffect, useRef, useState } from "react";

import NavBar from "../nav/nav-bar";
import SideBar from "../nav/mobile";
import Collection from "./collections";
import FirstSlider from "./sliders/FirstSlider";
import Catalogue from "./catalogue";
import About from "./about";

import styles from "./home.module.css";

import to_top from "../assets/icons/to-top.svg";
import SecondSlider from "./sliders/SecondSlider";

const Home = ({to_top_btn, footer}) => {
    return(
        <div className={styles.home}>
            <FirstSlider/>
            <Collection/>
            <div id="social-float" className={styles.container}>
                <Catalogue/>
                <About/>
            </div>
        </div>
    )
}

export default Home;