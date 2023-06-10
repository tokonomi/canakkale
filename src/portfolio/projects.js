import React from "react";

import styles from "./protfolio.module.css"

import xari_main from "../assets/portfolio/projects/xari-bulbul-main.jpeg";
import qarabag_main from "../assets/portfolio/projects/qarabag-otel-main.jpg";
import sumqayit_main from "../assets/portfolio/projects/sumqayit-main.jpeg";
import airport_main from "../assets/portfolio/projects/airport-main.jpeg";
import beverly_main from "../assets/portfolio/projects/beverly-main.jpeg";
import chaplin_main from "../assets/portfolio/projects/chaplin-main.jpg"

const Projects = () => {
    const project_items = [
        {
            img: xari_main,
            title: 'Xarı Bülbül Oteli — 2022',
            city: 'Azerbaycan, Qarabağ'
        },
        {
            img: qarabag_main,
            title: 'Qarabağ Oteli — 2022',
            city: 'Azerbaycan, Qarabağ'
        },
        {
            img: sumqayit_main,
            title: 'Sumqayıt Şəhər Mərkəzləri — 2021',
            city: 'Azerbaycan, Sumqayıt'
        },
        {
            img: airport_main,
            title: 'Havalimanları — 2022',
            city: 'Azerbaycan, Silkway – Fuzuli'
        },
        {
            img: beverly_main,
            title: 'Beverly Hills Diner — 2021',
            city: 'Azerbaycan, Bakı, Deniz Mall'
        },
        {
            img: chaplin_main,
            title: 'Chaplin Coffee — 2020',
            city: 'Azerbaycan, Bakı'
        },
    ]
    return(
        <div className={styles.projects}>
            <div className={styles.project_header}>
                <h1>PROYEKTLER</h1>
            </div>
            <div className={`${styles.projects_list} container`}>
                {
                    project_items.map((el, i) => {
                        return(
                            <div className={styles.project_item}>
                                <img alt=""  style={{backgroundImage: `url(${el.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
                                <div className={styles.item_title}>
                                    <h3>{el.title}</h3>
                                    <p>{el.city}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;