import React from "react";

import styles from "./protfolio.module.css"
import decovita_img from "../assets/brands/decovita_white.png"

const Brands = () => {
    const brands_data = [
        {
            img: '',
            title: 'Some title',
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
        },
        {
            img: '',
            title: 'Some title',
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
        },
        {
            img: '',
            title: 'Some title',
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
        },
    ]
    return(
        <>
            <div className={`${styles.brands} container`}>
                <section>
                    <h3>Brendler</h3>
                    <div className={styles.brands_blocks}>
                        {
                            brands_data.map((el, i) => {
                                return(
                                    <div key={i} className = {`img-push-up ${styles.brand_block}`}>
                                        <img className={styles.brand_bg} src="https://plus.unsplash.com/premium_photo-1661944207827-45fc033c4e36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"/>
                                        <figcaption className={styles.brand_caption}>
                                            <div className={styles.brand_info}>
                                                <img src={decovita_img}/>
                                                <p className={styles.brand_title}>{el.title}</p>
                                                <p className={styles.brand_about}>{el.about}</p>
                                            </div>
                                        </figcaption>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default Brands;