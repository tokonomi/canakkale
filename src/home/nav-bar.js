import React from "react";


import styles from './home.module.css';

import logo from '../assets/logo-mobile.png';
import burger from '../assets/icons/burger.svg';

const NavBar = ({sideBar, setSideBar}) => {
    return(
        <div className={styles.navigation_block}>
            <nav>
                <img className={styles.logo} src={logo} alt = ''/>
                <img className={styles.burger_ico} src={burger} onClick={() => setSideBar(true)} alt=""/>
            </nav>
        </div>
    );
};

export default NavBar;