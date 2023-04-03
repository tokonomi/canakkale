import React from "react";


import styles from './nav-bar.module.css';

import logo from '../../assets/logo-mobile.png';
import burger from '../../assets/icons/burger.svg';

const NavBar = ({sideBar, setSideBar}) => {
    return(
        <div>
            <nav>
                <img className={styles.logo} src={logo} alt = ''/>
                <img className={styles.burger_ico} src={burger} onClick={() => setSideBar(true)} alt=""/>
            </nav>
        </div>
    );
};

export default NavBar;