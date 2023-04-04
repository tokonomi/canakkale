import React from "react";

import styles from './home.module.css';

const About = () => {
    return(
        <section className={styles.about_us}>
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
        </section>
    )
}

export default About;