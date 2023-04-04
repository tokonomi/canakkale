import React from "react";

import styles from "./home.module.css";

const Collection = () => {
    const collectionData = [
        {
            name: 'Primavera',
            design: 'design classic',
            collections: [
                {
                    name: 'Como',
                    img: '#831288'
                },
                {
                    name: 'cemento',
                    img: '#912234'
                },
                {
                    name: 'wood',
                    img: '#916434'
                },
                {
                    name: 'clam wood',
                    img: '#912982'
                }
            ]
        },
        {
            name: 'golden tile',
            design: 'modern ceramics',
            collections: [
                {
                    name: 'Moco',
                    img: '#131288'
                },
                {
                    name: 'Cota loco',
                    img: '#999234'
                },
                {
                    name: 'wood',
                    img: '#916434'
                },
                {
                    name: 'moca wood',
                    img: '#912982'
                }
            ]
        },
        {
            name: 'brick style',
            design: 'indoor&outdoor',
            collections: [
                {
                    name: 'chomoloco',
                    img: '#831210'
                },
                {
                    name: 'fabiraco',
                    img: '#002234'
                },
                {
                    name: 'subezo',
                    img: '#910434'
                },
                {
                    name: 'clam wood',
                    img: '#912982'
                }
            ]
        },
        {
            name: 'Terragres',
            design: 'big sizes',
            collections: [
                {
                    name: 'Como',
                    img: '#831288'
                },
                {
                    name: 'cemento',
                    img: '#912234'
                },
                {
                    name: 'wood',
                    img: '#916434'
                },
                {
                    name: 'clam wood',
                    img: '#912982'
                }
            ]
        }
    ]
    return(
        <div>
            {
                collectionData.map((element, id) => {
                    return(
                        <section key={id} className={styles.collections_section}>
                            <h3>{element.name}</h3>
                            <ul className={styles.images}>
                                {element.collections.map((element, id) => {
                                    return(
                                        <li key={id} style={{backgroundColor: element.img}}>
                                            <h2>{element.name}</h2>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default Collection;