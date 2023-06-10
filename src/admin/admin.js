import axios from "axios";
import React, { useState } from "react";
import styles from "./admin.module.css"
import _Products from "./products/_products";
import _Gallery from "./products/_gallery";

const Admin = () => {    
    let [showProducts, setShowProducts] = useState(false)
    let [showGallery, setShowGallery] = useState(false)

    return(
        <div>
            <button onClick={() => {setShowGallery(!showGallery)}}>Gallery</button>
            <button onClick={() => {setShowProducts(!showProducts)}}>Products</button>
            <div className={styles.collections_block}>
                {
                    showGallery ? <_Gallery/> : ''
                }
                {
                    showProducts ? <_Products/> :''
                }
            </div>
        </div>
    )
}

            // {sliderImage == "" || sliderImage == null ? "" : <img width={100} height={100} src={sliderImage}/>} 
export default Admin;