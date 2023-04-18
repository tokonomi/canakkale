import React, { useEffect, useState } from "react";

import styles from "./catalog.module.css";
import search_ico from "../assets/icons/search.svg"
import close_ico from "../assets/icons/close.svg"

const Catalog = () => {
    let [closed, setClosed] = useState(false);
    const filter_state = () => {
        if(window.innerWidth >= 1170) setClosed(true); else setClosed(false);
        console.log(closed)
        if(closed){
            return styles.opened_bg
        }else return styles.closed_bg
    }
    window.addEventListener('resize', () => {filter_state()})
    useEffect(() => {
        filter_state()
    }, [])
    return( 
        <div className={styles.catalog}>
            <div className={styles.catalog_header}>
                <h1>Catalog</h1>
            </div>
            <div className={styles.catalog_body}>
                <div className={`${styles.filter} ${closed ? styles.opened_bg : styles.closed_bg}`}>
                    <div className={styles.filter_search}>
                        <h2 onClick={() => {setClosed(true)}}>FILTERS</h2>
                        <div className={styles.search}>
                            <input type="text" className={styles.search_input}/>
                            <img src={search_ico} alt="a" className={styles.search_btn}/>
                        </div>
                    </div>
                    <div className={`${styles.filters_params} ${closed ? styles.opened_filter : styles.closed_filter}`}>
                        <div className={styles.filter_header}>
                            <img className={styles.close_btn} src={close_ico} onClick={() => {setClosed(false)}}/>
                            <h3>FILTERS</h3>
                        </div>
                        <div className={styles.params_box}>
                            <div className={styles.params_item}>
                                <input className={styles.collapsible} type="checkbox" id="collapsible1"/>
                                <label className={styles.param_type} htmlFor="collapsible1">type</label>
                                <div className={styles.params}>
                                    <input id="item1" type="checkbox"/>
                                    <label htmlFor="item1">Item</label>
                                </div>
                                <div className={styles.params}>
                                    <input id="item1" type="checkbox"/>
                                    <label htmlFor="item1">Item</label>
                                </div>
                                <div className={styles.params}>
                                    <input id="item1" type="checkbox"/>
                                    <label htmlFor="item1">Item</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.item_side}>
                    <div className={styles.search_desktop}>
                        <input type="text" className={styles.search_input}/>
                        <img src={search_ico} alt="a" className={styles.search_btn}/>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.item_background}></div>
                            <div className={styles.item_titles}>
                                <p>COLLECTION FLANDRIYA</p>
                                <p>Flandriya</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_background}></div>
                            <div className={styles.item_titles}>
                                <p>COLLECTION FLANDRIYA</p>
                                <p>Flandriya</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_background}></div>
                            <div className={styles.item_titles}>
                                <p>COLLECTION FLANDRIYA</p>
                                <p>Flandriya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;