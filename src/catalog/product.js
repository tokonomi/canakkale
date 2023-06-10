import React from "react";
import styles from "./catalog.module.css"

const Product = () => {
    return(
        <div className={styles.product}>
            <div className={styles.product_img}></div>
            <div className={styles.product_info}>
                <h1>ONYX CIELO</h1>
                <div className={styles.product_adv}>
                    {/* <div className={styles.technical}>
                        <h4>technical advantages</h4>
                        <div className={styles.technical_items}>
                            <div className={styles.technical_item}></div>
                        </div>
                    </div> */}
                    <div className={styles.the_cover}>
                        <div>
                            <h4>cover choose</h4>
                            <div>CHTOTO</div>
                        </div>
                        <div>
                            <h4>Olke</h4>
                            <div>CHTOTO</div>
                        </div>
                    </div>
                    <div className={styles.size}>
                        <div>
                            <h4>Olcu</h4>
                            <div></div>
                            <div>60x120</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>Benzer seriler</h3>
                <div>...</div>
            </div>
        </div>
    )
}

export default Product;