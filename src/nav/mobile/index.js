import React from "react";
import styles from './side-bar.module.css';

import close_ico from '../../assets/icons/close.svg';
import location from '../../assets/icons/location.svg';
import instagram from '../../assets/icons/instagram.svg';

const SideBar = ({setSideBar, sideBar}) => {
    return(
        <div className={sideBar ? styles.side_bar_open : styles.side_bar_hidden}>
            <header>
                <img src={close_ico} alt='' onClick={() => {setSideBar(false)}}/>
                <h3>Menu</h3>
            </header>
            <ul className={styles.side_bar}>
                <li className={styles.item_title}>
                    <h6>Haqqimizda</h6>
                    <p>Tarixçə</p>
                </li>
                <li>ÇK Showroom</li>
                <li>Kale Showroom</li>
                <li className={styles.item_title}>
                    <h6>Məhsullar və Xidmətlər</h6>
                    <p>Kafel</p>
                </li>
                <li>Metlax</li>
                <li>Qranit</li>
                <li className={styles.item_title}>
                    <h6>Portfolio</h6>
                    <p>Brendlər</p>
                </li>
                <li>Partnyorlar</li>
                <li>Proyektlər</li>
            </ul>
            <footer className={styles.footer}>
                <p>T:+994 55 211 01 12</p>
                <p>T:+994 55 211 01 12</p>
                <p><img src={location}/>28 may, Khatai</p>
                <p><img src={instagram}/>chanaqqalaseramik</p>
            </footer>
        </div>
    )
};

export default SideBar;