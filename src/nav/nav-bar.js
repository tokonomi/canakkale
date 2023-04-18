import React from "react";

import logo_mobile from '../assets/logo-mobile.png';
import logo from '../assets/logo.png';
import burger from '../assets/icons/burger.svg';
import home from '../assets/icons/home.svg'
import about_ico from '../assets/icons/about-us.svg';
import products_ico from '../assets/icons/products.svg';
import portfolio_ico from '../assets/icons/portfolio.svg';
import catalog_ico from '../assets/icons/catalog.svg';

import styles from './nav.module.css';

const NavBar = ({sideBar, setSideBar}) => {
    return(
        <div className="container">
            <div className={styles.navigation_block}>
            <nav className={styles.nav}>
                <div className={styles.logo}><img src={logo}/></div>
                <ul className={styles.menu_list}>
                    <div className={styles.mid_nav}>
                        <li>
                            <img src={home}/>
                            <p>Home</p>
                        </li>
                        <li className={styles.dropdown_hover1}>
                            <img src={about_ico}/>
                            <p>About us</p>
                            <ul className={`${styles.dropdown1} ${styles.dropdown}`}>
                                <li>Tarixce</li>
                                <li>CK Showroom</li>
                                <li>Kale Showroom</li>
                            </ul>
                        </li>
                        <li className={styles.dropdown_hover2}>
                            <img src={products_ico}/>
                            <p>Products & Services</p>
                            <ul className={`${styles.dropdown} ${styles.dropdown2}`}>
                                <li>Kafe</li>
                                <li>Metlax</li>
                                <li>Qranit</li>
                            </ul>
                        </li>
                        <li className={styles.dropdown_hover3}>
                            <img src={portfolio_ico}/>
                            <p>Porfolio</p>
                            <ul className={`${styles.dropdown} ${styles.dropdown3}`}>
                                <li>
                                    <ul className={styles.dropdown_contacts}>
                                        <li>T: +994 (055) 211 01 12</li>
                                        <li>T: +994 (055) 211 01 12</li>
                                        <li>28 may, Khatai</li>
                                        <li>chanaqqalaseramik</li>
                                    </ul>
                                </li>
                                <li className={styles.right_s_dd}>
                                    <ul>
                                        <li>Brendler</li>
                                        <li>Partnyorlar</li>
                                        <li>Proyektler</li>
                                    </ul>
                                </li>
                            </ul>
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
        </div>
    );
};

export default NavBar;