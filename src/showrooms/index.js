import React, { useEffect } from "react";

import styles from "./showroom.module.css"
import { useDispatch } from "react-redux";

const Showrooms = ({text, f_name, loc, contact, w_time, h_img}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "STOP_INTERVAL"})
    }, [])
    return(
        <div className={`${styles.showroom} container`}>
            <h1 className={styles.showroom_title}>{f_name}</h1>
            <div className={styles.showroom_header}>
                <div className={styles.showroom_header_img} style={{backgroundImage: `url(${h_img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className={styles.showroom_info}>
                    <p>{text}</p>
                    <ul className={styles.showroom_info_list}>
                        <li>
                            <ul>
                                <li>BAKU</li>
                                <li>{loc}</li>
                                <li>{contact}</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Xidmetler gosterilir</li>
                                <li>{w_time}</li>
                                <li>Bazar: geyri is gunu</li>
                            </ul>
                        </li>
                        <li>Xeritede goster</li>
                    </ul>
                </div>
            </div>
            <div className={styles.showroom_gallery}>
                <div>
                    <img src="https://goldentile.com.ua/assets/cache/images/1c2892aa136823b040f86b2511b2f8ff.jpeg"/>
                    <img src="https://goldentile.com.ua/assets/cache/images/a35ad0d1f587ea7f73bdc6d5ce4f5648.jpeg"/>
                    <img src="https://goldentile.com.ua/assets/cache/images/d7003885def65b4dbface236c53587fa.jpeg"/>
                </div>
                <div>
                    <img src="https://goldentile.com.ua/assets/cache/images/13b9e99abea0548639c69951c431d563.jpeg"/>
                    <img src="https://goldentile.com.ua/assets/cache/images/f5adca0be927acbde523ba7f61391217.jpeg"/>
                    <img src="https://goldentile.com.ua/assets/cache/images/1636b17ccfc615a10660f26c9d646b34.jpeg"/>
                </div>
            </div>
        </div>
    )
}

export default Showrooms;