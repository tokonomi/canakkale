import React, { useState } from "react";

import NavBar from "./nav";
import SideBar from "../mobile/side-bar";

import styles from "./home.module.css";

const Home = () => {
    const [sideBar, setSideBar] = useState(false);
    return(
        <div className={styles.home}>
            <div className={sideBar ? styles.dark_shade : styles.light_shade}></div>
            <NavBar sideBar={sideBar} setSideBar={setSideBar}/>
            <SideBar setSideBar={setSideBar} sideBar={sideBar}/> 
        </div>
    )
}

export default Home;