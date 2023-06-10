import React from "react";

import styles from './footer.module.css'

import logo from '../assets/logo.png'

const Footer = ({footer}) => {
    return(
        <footer ref={footer} id="footer" className={styles.footer}>
            <div className={styles.footer_img}>
                <img src={logo}/>
            </div>
            <ul className={styles.footer_info_list}>
                <li className={styles.collapsible}>
                    <input type="checkbox" id="collapsible-info"/>
                    <label htmlFor="collapsible-info">Haqqımızda</label>
                    <ul className={styles.collapsible_info}>
                        <li>Bizim komandamiz</li>
                        <li>Məhsullar</li>
                    </ul>
                </li>
                <li className={styles.collapsible}>
                    <input type="checkbox" id="collapsible-product"/>
                    <label htmlFor="collapsible-product">Məhsul haqqinda</label>
                    <ul className={styles.collapsible_info}>
                        <li>Hardan almaq olar?</li>
                        <li>Keyfiyyət sertifikatları</li>
                        <li>Lokasiya</li>
                    </ul>
                </li>
                <li className={styles.collapsible}>
                    <input type="checkbox" id="collapsible-production"/>
                    <label htmlFor="collapsible-production">İstehsal</label>
                    <ul className={styles.collapsible_info}>
                        <li>The Primavera</li>
                        <li>The golden tile</li>
                        <li>The brick style</li>
                        <li>The terragress</li>
                    </ul>
                </li>
                <li className={styles.collapsible}>
                    <input type="checkbox" id="collapsible-contacts"/>
                    <label htmlFor="collapsible-contacts">Elaqə</label>
                    <ul className={styles.collapsible_info}>
                        <li><b>Ünvan: </b></li>
                        <li>Xətai pr. 43, Baku, Azerbaijan, AZ1008</li>
                        <li>Xətai pr. 158, Baku, Azerbaijan, AZ1008</li>
                        <li><b>Telefon:</b> </li>
                        <li>(+994 55) 808 03 93</li>
                        <li>(+994 50) 544 25 35</li>
                        <li><b>Email: </b></li>
                        <li>office@canaqqalaseramik.az</li>
                    </ul>
                </li>
            </ul>
            <p className={styles.footer_copyright}>©Copytight 2023</p>
        </footer>
    )
}

export default Footer;