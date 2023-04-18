import React, { useEffect, useRef, useState } from "react";

import styles from "./slider.module.css";
const SecondSlider = ({collectionData}) => {
    let _index = -1;
    let _common_amount = 0;
    let _current_index = 1;
    let ref = useRef()
    let [main_block_width, setMain_block_width] = useState(window.innerWidth > 1170 ? 450 : 350);

    
    collectionData.forEach(e => {
        _common_amount += e.collections.length
    })
    let _second_slider = [];

    collectionData.map((e1, index1) => {
        return(
            e1.collections.map((e2, index2) => {
                _second_slider.push(e2)
            })
            )
        })
    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 1170){
                setMain_block_width(450)
            }else{
                setMain_block_width(350)
            }
        })
    }, [])

    const moveToRight = () => {
        if((_common_amount - 3) == _current_index){
            _current_index = 0
        }
        _current_index++
        document.querySelector('.inside_block').style.left = _current_index * (-1 * main_block_width) + 'px'
        document.querySelector('.inside_block').style.width = main_block_width
        document.querySelectorAll('.bloc_secondary_switch').forEach((e) => {
            e.style.transform = `translateX(calc(${_current_index} * -100% - ${_current_index * 40}px))`
        })
    }
    const moveToLeft = () => {
        _current_index--
        if(_current_index < 0){
            _current_index = _common_amount - 3 ;
        }
        document.querySelector('.inside_block').style.left = _current_index * (-1 * main_block_width) + 'px'
        document.querySelectorAll('.bloc_secondary_switch').forEach((e) => {
            e.style.transform = `translateX(calc(${_current_index} * -100% - ${_current_index * 40}px))`
        })
    }
    setTimeout(() => {moveToLeft()}, 400)
    return(
        <section className={`${styles.second_slider}`}>
            <div className={styles.slider_blocks}>
                <h1 className={styles.title}>Kolleksiyalar</h1>
                <div ref={ref} className={styles.block_main}>
                    <div className={styles.navigation_bar}>
                        <div onClick={moveToRight}></div>
                        <div onClick={moveToLeft}></div>
                    </div>
                    <div className={`${styles.inside_block} inside_block`}>
                        {
                            collectionData.map((e1, index1) => {
                                return(
                                    e1.collections.map((e2, index2) => {
                                            _index++
                                        return(
                                            <div key={index2} style={{left: (_index * main_block_width), width: main_block_width}} className={styles.main_inside}>
                                                {e2.name}
                                            <br/>
                                                {e1.name}
                                            </div>
                                        )
                                    })
                                )
                            })
                        }
                    </div>
                </div>
                
                <div className={styles.secondary_blocks}>
                    {
                        _second_slider.slice(1).map((e,i) => {
                            _index++
                            return(
                                <div key={i} style={{left: (_index * main_block_width)}} className={`${styles.block_secondary} bloc_secondary_switch`}>
                                    {i}
                                    <br/>
                                    {e.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SecondSlider;