import React from "react";

import styles from './home.module.css';

const Catalogue = () => {
    const catalog_data = [
        {
            name: 'vibrante marbles',
            img: '#655978'
        },
        {
            name: 'onix',
            img: '#658778'
        },
        {
            name: 'artsy',
            img: '#158178'
        },
        {
            name: 'the ultimate blacked',
            img: '#258678'
        },
        {
            name: 'stylish',
            img: '#358078'
        },
        {
            name: 'luxury',
            img: '#458478'
        },
        {
            name: 'essentials',
            img: '#758778'
        },
        {
            name: 'zimbabwe',
            img: '#858778'
        },
        {
            name: 'outdoor',
            img: '#958778'
        }
    ]
    return(
        <section className={styles.catalogue_section}>
            <h2>Zovqə uygun</h2>
            <div className={styles.catalog_grid}>
                {
                    catalog_data.map((element, id) => {
                        return(
                            <div className={styles[`item${id}`] || styles.item} style={{backgroundColor: element.img}} key={id}>
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