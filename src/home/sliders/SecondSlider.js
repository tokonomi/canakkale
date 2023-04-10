import React from "react";

import styles from "./slider.module.css";
const SecondSlider = ({collectionData}) => {
    let _index = -1;
    let _common_amount = 0;
    let _current_index = 1; 
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

    const moveToRight = () => {
        
        if((_common_amount - 3) == _current_index){
            _current_index = 0
        }
        _current_index++
        document.querySelector('.inside_block').style.left = _current_index * -350 + 'px'
        document.querySelectorAll('.bloc_secondary_switch').forEach((e) => {
            e.style.transform = `translateX(calc(${_current_index} * -100% - ${_current_index * 40}px))`
        })
    }
    const moveToLeft = () => {
        
        _current_index--
        if(_current_index < 0){
            _current_index = _common_amount - 3 ;
        }
        document.querySelector('.inside_block').style.left = _current_index * -350 + 'px'
        document.querySelectorAll('.bloc_secondary_switch').forEach((e) => {
            e.style.transform = `translateX(calc(${_current_index} * -100% - ${_current_index * 40}px))`
        })
    }
    return(
        <section className={styles.second_slider}>
            <div className={styles.slider_blocks}>
                <div className={styles.block_main}>
                    <div className={styles.navigation_bar}>
                        <div onClick={() => {moveToRight()}}></div>
                        <div onClick={() => {moveToLeft()}}></div>
                    </div>
                    <div className={`${styles.inside_block} inside_block`}>
                        {
                            collectionData.map((e1, index1) => {
                                return(
                                        e1.collections.map((e2, index2) => {
                                            _index++
                                        return(
                                            <div key={index2} style={{left: (_index * 350)}} className={styles.main_inside}>
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
                                <div key={i} style={{left: (_index * 350)}} className={`${styles.block_secondary} bloc_secondary_switch`}>
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