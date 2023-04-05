import React from "react";

import logo_mobile from '../assets/logo-mobile.png';
import logo from '../assets/logo.png';
import burger from '../assets/icons/burger.svg';
import home_ico from '../assets/icons/home.svg';
import about_ico from '../assets/icons/about-us.svg';
import products_ico from '../assets/icons/products.svg';
import portfolio_ico from '../assets/icons/portfolio.svg';
import catalog_ico from '../assets/icons/catalog.svg';

import styles from './nav.module.css';

const NavBar = ({sideBar, setSideBar}) => {
    return(
        <div className={styles.navigation_block}>
            <nav className={styles.nav}>
                <div className={styles.logo}><img src={logo}/></div>
                <ul className={styles.menu_list}>
                    <div>
                        <li>
                            <img src={home_ico}/>
                            <p>Home</p>
                        </li>
                        <li>
                            <img src={about_ico}/>
                            <p>About us</p>
                        </li>
                        <li>
                            <img src={products_ico}/>
                            <p>Products & Services</p>
                        </li>
                        <li>
                            <img src={portfolio_ico}/>
                            <p>Porfolio</p>
                        </li>
                    </div>
                    <div>
                        <li>
                            <img src={catalog_ico}/>
                            <p>Catalog</p>
                        </li>
                    </div>
                </ul>
            </nav>
            <nav className={styles.nav_mobile}>
                <img className={styles.logo_mobile} src={logo_mobile} alt = ''/>
                <img className={styles.burger_ico} src={burger} onClick={() => setSideBar(true)} alt=""/>
            </nav>
        </div>
    );
};

export default NavBar;