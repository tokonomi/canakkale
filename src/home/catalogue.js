import React from "react";

import styles from './home.module.css';
import sekil1 from '../assets/home/catalog/Sekil1.jpg'
import sekil2 from '../assets/home/catalog/Sekil2.jpg'
import sekil3 from '../assets/home/catalog/Sekil3.jpg'
import sekil4 from '../assets/home/catalog/Sekil4.jpg'
import sekil5 from '../assets/home/catalog/Sekil5.jpg'
import sekil6 from '../assets/home/catalog/Sekil6.jpg'
import sekil7 from '../assets/home/catalog/Sekil7.jpg'

const Catalogue = () => {
    const catalog_data = [
        {
            name: 'Taxta',
            img: sekil1
        },
        {
            name: 'Fasad',
            img: sekil2
        },
        {
            name: 'Kalesinterflex',
            img: sekil3
        },
        {
            name: 'Yeni Kolleksiya',
            img: sekil4
        },
        {
            name: 'Ən çox satılan',
            img: sekil5
        },
        {
            name: 'İç məkan',
            img: sekil6
        },
        {
            name: 'Çöl məkan',
            img: sekil7
        }
    ]
    return(
        <section className={styles.catalogue_section}>
            <h2>Zovqə uygun</h2>
            <div className={styles.catalog_grid}>
                {
                    catalog_data.map((element, id) => {
                        return(
                            <div className={`${styles[`item${id}`]}  ${styles['item']}`} style={{ backgroundImage: `url("${element.img}") `, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} key={id}>
                                <h3>{element.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Catalogue;