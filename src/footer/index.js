import React from "react";

import styles from './footer.module.css'

import logo from '../assets/logo.png'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_img}>
                <img src={logo}/>
            </div>
            <ul className={styles.footer_info_list}>
                <li className={styles.collapsible}>
                    <input type="checkbox" id="collapsible-info"/>
                    <label for="collapsible-info">Haqqımızda</label>
                    <ul className={styles.collapsible_info}>
                        <li>Bizim komandamiz</li>
                        <li>Məhsullar</li>
                    </ul>
                </li>
                <li className={styles.collapsible}>
                    <input type="checkbox" id="collapsible-product"/>
                    <label for="collapsible-product">Məhsul haqqinda</label>
                    <ul className={styles.collapsible_info}>
                        <li>Hardan almaq olar?</li>
                        <li>Keyfiyyət sertifikatları</li>
                        <li>Lokasiya</li>
                    </ul>
                </li>
                <li className={styles.collapsible}>
                    <input type="checkbox" id="collapsible-production"/>
                    <label for="collapsible-production">İstehsal</label>
                    <ul className={styles.collapsible_info}>
                        <li>The Primavera</li>
                        <li>The golden tile</li>
                        <li>The brick style</li>
                        <li>The terragress</li>
                    </ul>
                </li>
                <li className={styles.collapsible}>
                    <input type="checkbox" id="collapsible-contacts"/>
                    <label for="collapsible-contacts">Elaqə</label>
                    <ul className={styles.collapsible_info}>
                        <li>Ünvan: Azerbaijan, 03214, Baku, Khatai K. 55</li>
                        <li>Telefon: +994 55 123 45 67</li>
                        <li>Email: info@canakkale.com</li>
                    </ul>
                </li>
            </ul>
            <p>©Copytight 2023</p>
        </footer>
    )
}

export default Footer;