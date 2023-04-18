import React, { useEffect, useRef } from "react";

import styles from './home.module.css';

const About = () => {
    const pf_inner = useRef()
    const pf_l_img = useRef()
    const pf_r_img = useRef()
    const pf_main_img = useRef()
    const portfolio = [
        {
            title: '1Own professional laboratory with the best European equipment provides quality control at every stage of production',
            l_img: '#828834',
            r_img: '#829100',
            main_img: '#000333',
        },
        {
            title: '2Own professional laboratory with the best European equipment provides quality control at every stage of production',
            l_img: '#528834',
            r_img: '#529100',
            main_img: '#444333',
        },
        {
            title: '3Own professional laboratory with the best European equipment provides quality control at every stage of production',
            l_img: '#128834',
            r_img: '#129100',
            main_img: '#122333',
        }
    ]

    function changeImgPortfolio(txt, color1, color2, mainColor){
        pf_inner.current.innerHTML = txt;
        pf_l_img.current.style.backgroundColor = color1;
        pf_r_img.current.style.backgroundColor = color2;
        pf_r_img.current.style.bottom = Math.floor(Math.random() * 200) + 100 + 'px';
        pf_l_img.current.style.top = Math.floor(Math.random() * 150) + 50 + 'px';
        pf_main_img.current.style.backgroundColor = mainColor;
    }

    useEffect(() => {
        let currentObj = portfolio[0];
        changeImgPortfolio(currentObj.title, currentObj.l_img, currentObj.r_img, currentObj.main_img)
        const interval = setInterval(() => {
            currentObj = portfolio[Math.floor(Math.random() * portfolio.length)]
            
            if(window.innerWidth > 1170){
                changeImgPortfolio(currentObj.title, currentObj.l_img, currentObj.r_img, currentObj.main_img)
            }else return
        },10000)

        return () => clearInterval(interval);
    },[])

    return(
        <section className={styles.about_us}>
            <h2>Haqqimizda</h2>
            <div className={styles.about_img}></div>
            <div className={styles.about_list}>
                <div className={styles.list_container}>
                    <div>
                        <h3>A decoration from nature.</h3>
                        <p>Decovita Ceramics reached more than 2,500 patterns and hundreds of products without compromising the quality.</p>
                    </div>
                    <div>
                        <h3>Working since 1995’s</h3>
                        <p>The factory founded by Decovita Seramik, of which head office is located in Kayasehir/Istanbul, with an investment of 70 million Euro</p>
                    </div>
                </div>
                <div className={styles.list_container}>
                    <div>
                        <h3>We have the most modern production</h3>
                        <p>Decovita, with its R & D and P&D team consisting of 40 experts under its roof</p>
                    </div>
                    <div>
                        <h3>High level of service</h3>
                        <p>Decovita Ceramics reached more than 2,500 patterns and hundreds of products without compromising the quality.</p>
                    </div>
                </div>
                <div className={styles.list_container}>
                    <div>
                        <h3>Own raw materials.</h3>
                        <p>The world's best clay and clay feldspar</p>
                    </div>
                    <div>
                        <h3>Modern design</h3>
                        <p>Own design studio develops new decors, reliefs and surfaces</p>
                    </div>
                </div>
            </div>
            <div className={styles.gallery}>
                <div className={styles.sm_img} ref={pf_l_img}></div>
                <div className={styles.center_img} ref={pf_main_img}></div>
                <div className={styles.sm_img} ref={pf_r_img}></div>
                <p ref={pf_inner}></p>
            </div>
        </section>
    )
}

export default About;