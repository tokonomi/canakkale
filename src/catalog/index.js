import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getImagesAsync, getProductsAsync } from "../actions";

import styles from "./catalog.module.css";
import search_ico from "../assets/icons/search.svg"
import close_ico from "../assets/icons/close.svg"



const Catalog = () => {
    let dispatch = useDispatch(),
        productsList = useSelector((state) => state.products),
        productsImage = useSelector((state) => state.images),
        [isLoading, setIsLoading] = useState(true),
        [productsData, setProductsData] = useState([]),
        [showNext, setShowNext] = useState(true),
        [closed, setClosed] = useState(false),
        page = useSelector((state) => state.limit.page)

        
    const cancelTokenSource = axios.CancelToken.source();

    const filter_state = () => {
        if(window.innerWidth >= 1170) setClosed(true); else setClosed(false);
        if(closed){
            return styles.opened_bg
        }else return styles.closed_bg
    }
    window.addEventListener('resize', () => {filter_state()})
    useEffect(() => {
        dispatch({type: "STOP_INTERVAL"})
        filter_state()
        dispatch(getProductsAsync(page))
        async function fetchData(){
            try{
                const res = await axios.get('http://localhost:5500/api/items/all_items', {
                    cancelToken: cancelTokenSource.token
                })
                setProductsData(res.data)
                res.data.forEach(async (e) => {
                    dispatch(getImagesAsync(e))
                    setTimeout(() => {setIsLoading(false)}, 5000)
                })
            }catch(err){
                console.log(err)
            }
        }
        fetchData()

        return () => {
            cancelTokenSource.cancel('Canceled')
        }
        
    }, [page])
    
    const getElements = async () => {
        if(productsData.length - 1 == productsList.length){
            setShowNext(false)
        }
        document.documentElement.scrollTop = document.documentElement.scrollHeight - 1024
        dispatch({type: 'INCR'})
    }
    if(isLoading){
        return <div>...Loading</div>
    }
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
                        {
                            productsList.map((e, i) => {
                                return(
                                    <div key={i} className={styles.item}>
                                        <div className={styles.item_background} style={{
                                            backgroundImage: `url("http://localhost:5500/api/image/${e.Çeşid}/${e.Ölkə}/${e.Brend}/${e.Brend} ${e.Çeşid}/${e.Brend} ${e.Çeşid} ${e.Ölçü}/${e.Nomenklatura}/${productsImage[i] && productsImage[i][0]}")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                        </div>
                                        <div className={styles.item_titles}>
                                            <p>{e.Brend}</p>
                                            <p>{e.Nomenklatura}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    {showNext ? <div>
                                    <button onClick={getElements}>Next</button>
                                </div>
                              : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Catalog;