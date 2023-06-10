import React, { useEffect } from "react";


import styles from "./protfolio.module.css";
import Brands from "./brands";
import Partners from "./partners";
import Projects from "./projects";
import { useDispatch } from "react-redux";

const Portfolio = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "STOP_INTERVAL"})
    }, [])
    return(
        <div className={styles.portfolio}>
            <Partners/>
            <Brands/>
            <Projects/>
        </div>
    )
}

export default Portfolio;