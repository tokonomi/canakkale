import React, { useEffect, useRef, useState } from "react";

import styles from './home.module.css';
import _about from '../assets/home/about/_about.png'
import _ico1 from '../assets/home/about/icons/1.jpg'
import _ico2 from '../assets/home/about/icons/2.jpg'
import _ico3 from '../assets/home/about/icons/3.jpg'
import _ico4 from '../assets/home/about/icons/4.jpg'

import _gal1_l from '../assets/home/gallery/1.jpg'
import _gal1_r from '../assets/home/gallery/2.jpg'
import _gal1_m from '../assets/home/gallery/3.jpg'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "../actions";

const About = () => {
    const isIntervalRunning = useSelector((state) => state.interval.isRunning)
    const dispatch = useDispatch()
    const pf_inner = useRef()
    let [g_l_img, setG_l_img] = useState(_gal1_l);
    let [g_r_img, setG_r_img] = useState(_gal1_r);
    let [g_main_img, setG_main_img] = useState(_gal1_m);
    const pf_l_img = useRef();
    const pf_r_img = useRef()
    const pf_main_img = useRef()
    let [loaded, setLoaded] = useState(false)

    function changeImgPortfolio(txt, color1, color2, mainColor){
        if(isIntervalRunning && pf_inner.current) {
            pf_inner.current.innerHTML = txt;
            setG_l_img(color1)
            setG_r_img(color2)
            setG_main_img(mainColor)
            pf_r_img.current.style.bottom = Math.floor(Math.random() * 200) + 100 + 'px';
            pf_l_img.current.style.top = Math.floor(Math.random() * 150) + 50 + 'px';
        }
    }
    
    function contructionToChange(current_portfolio) {
        let currentObj = current_portfolio[0];
        // console.log(currentObj)
        if(isIntervalRunning && pf_inner.current) {
            changeImgPortfolio(currentObj?.title, currentObj?.l_img, currentObj?.r_img, currentObj?.main_img)
            function delayedFunction(){
                setTimeout(() => {
                    currentObj = current_portfolio[Math.floor(Math.random() * current_portfolio.length)]
                    
                    if(window.innerWidth > 1170 && isIntervalRunning){
                        changeImgPortfolio(currentObj?.title, currentObj?.l_img, currentObj?.r_img, currentObj?.main_img)
                    }else return
                    delayedFunction()
                },5000)
            }
            delayedFunction()
        }else return
    } 

    useEffect(() => {
        dispatch({type:"START_INTERVAL"})
        async function fetchData(){
            const res = await axios.get("http://localhost:5500/gallery/all_items")
            const gallery_dir = await axios.get("http://localhost:5500/api/gallery")
            const portfolioData = res.data.map(async (e, i) => {
                const in_folder = await axios.get(`http://localhost:5500/api/gallery/${gallery_dir.data[i]}`)
                return {
                    title: e.title,
                    l_img: `http://localhost:5500/api/gallery-images/${gallery_dir.data[i]}/${in_folder.data[0]}`,
                    r_img: `http://localhost:5500/api/gallery-images/${gallery_dir.data[i]}/${in_folder.data[1]}`,
                    main_img: `http://localhost:5500/api/gallery-images/${gallery_dir.data[i]}/${in_folder.data[2]}`,
                };
            })
            const portfolioRes = await Promise.all(portfolioData)
            portfolioRes.forEach((e) => dispatch(getPortfolio(e)))
            setLoaded(true)
            if(isIntervalRunning) contructionToChange(portfolioRes)
        }

        fetchData();
    },[isIntervalRunning])

    return(
        <section className={styles.about_us}>
            <h2>Haqqimizda</h2>
            <div className={styles.about_img} style={{backgroundImage: `url("${_about}") `, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
            <div className={styles.about_list}>
                <div className={styles.list_container}>
                    <div>
                        <div className={styles.ico_side}>
                            <img src={_ico1}/>
                        </div>
                        <div>
                            <h3>Seramik (keramika)</h3>
                            <p>Sadə, zərif və eleqant həyat tərzini seçmiş müştərilərin asanlıqla seçim edə biləcəyi keramikalarımız müxtəlif ölkələrin brendləri özündə birləşdirir</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.ico_side}>
                            <img src={_ico2}/>
                        </div>
                        <div>
                            <h3>30 İldir sizinlə</h3>
                            <p>Daxili və xarici məkanlarınız üçün ən bol məhsul çeşidi ilə 30 ildir xidmətinizdəyik.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.list_container}>
                    <div>
                        <div className={styles.ico_side}>
                            <img src={_ico3}/>
                        </div>
                        <div>
                            <h3>Zəmanət</h3>
                            <p>Məhsullarımıza tam zəmanət verilir. Zəmanət kağızında qeyd olunmuş müddət ərzində siz məhsulu dəyişdirə və ya qaytara biləcəksiniz.</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.ico_side}>
                            <img src={_ico4}/>
                        </div>
                        <div>
                            <h3>Dizayn</h3>
                            <p>Çanakkale sizə xəyallarınızdakı hamam otağını yaratmağa şərait yaradır. İstədiyiniz kafel, mebel, qapı və aksesuarları zövqünüzə uyğun seçib dizayn edə bilərsiniz.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gallery}>
                <div className={styles.sm_img} ref={pf_l_img} style={{backgroundImage: `url(${g_l_img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <div className={styles.center_img} ref={pf_main_img} style={{backgroundImage: `url(${g_main_img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom'}}></div>
                <div className={styles.sm_img} ref={pf_r_img} style={{backgroundImage: `url(${g_r_img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <p ref={pf_inner}></p>
            </div> 
        </section>
    )
}

export default About;