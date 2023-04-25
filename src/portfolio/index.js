import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";


import styles from "./protfolio.module.css";
import support_ico from "../assets/icons/support.svg" 

const Portfolio = () => {
    const partners = [
        {
            img: 'https://images.unsplash.com/photo-1681654287364-6b2a4f043551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1681694112182-32c265ae2272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1681747767942-fa8ac9b64aec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1581088244515-64dc2471f75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1680464722849-a9ff62493ae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1678648542669-7dd44a9e3b9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1681767882515-631ce72a18a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1681647627150-f5cb38f3a626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
        }, 
    ]
    let converted_partners = []
    for(let i = 0; i < partners.length; i++){
        let obj = []
        obj.push(partners[i], partners[i+1])
        i++
        converted_partners.push(obj)
    }
    let random_numbers = [];
    return(
        <div className={styles.portfolio}>
            <div className={styles.partners}>
                <section>
                    <h3>Partnyorlar</h3>
                    <div className={styles.partners_header}>
                        <div className={styles.partners_header_img}></div>
                        <p className={styles.partners_header_text}>За більш ніж 10 років успішної роботи Golden Tile стала надійним партнером для провідних компаній в Україні і по всьому світу. Серед них - глобальні торговельні компанії, роздрібні мережі, провідні забудовники країни. Наше головне завдання - забезпечити їм безперебійне постачання продукції світового класу і якісний сервіс. Ми розвиваємося разом з нашими партнерами, і прагнемо будувати взаємовигідні довгострокові відносини.</p>
                    </div>
                </section>
                <section className={styles.features}>
                    <div>
                        <img src={support_ico} alt=""/>
                        <h4>Высокий уровень поддержки</h4>
                    </div>
                    <div>
                        <img src={support_ico} alt=""/>
                        <h4>Высокий уровень поддержки</h4>
                    </div>
                    <div>
                        <img src={support_ico} alt=""/>
                        <h4>Высокий уровень поддержки</h4>
                    </div>
                    <div>
                        <img src={support_ico} alt=""/>
                        <h4>Высокий уровень поддержки</h4>
                    </div>
                </section>
                <section>
                    <h3>Bizim Partnoyral</h3>
                    {
                        converted_partners.map((el, i) => {
                            return(
                                <Swiper
                                    key={i}
                                    effect={"flip"}
                                    allowTouchMove={false}
                                    grabCursor={false}
                                    autoplay={{
                                    delay: Math.floor(Math.random() * 7000) + 3000,
                                    disableOnInteraction: false,
                                    }}
                                    loop={false}
                                    pagination={false}
                                    navigation={false}
                                    modules={[Autoplay, EffectFlip, Pagination, Navigation]}
                                    className={styles.mySwiper}
                                >
                                    {
                                        el.map((el2, i2) => {         
                                            console.log(converted_partners)                 
                                            return(
                                                <SwiperSlide>
                                                    <img src={`${el2.img}`} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
{/*                                     
                                    <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                    </SwiperSlide> */}
                                </Swiper>
                            )
                        })
                    }
                </section>
            </div>
            <div className={styles.brands}>
                <section>
                    <div></div>
                    <h3>Brendler</h3>
                    <div>
                        <div></div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Portfolio;