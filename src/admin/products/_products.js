import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../admin.module.css"

const _Products = () => {
    let [productsCollection, setProductCollection] = useState([])
    
    async function getCollectionForProducts(){
        try{
            const res = await axios.get(`http://localhost:5500/api/items/all_items`)
            setProductCollection(res.data)
        }catch(err){
            console.log(err)
        }
    }
    async function deleteProduct(id){
        try{
            const response = await axios.delete(`http://localhost:5500/api/item/${id}`);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getCollectionForProducts()
    }, [productsCollection])
    return(
        <div>
            <h1>Produkt list</h1>
            {
                productsCollection.map(e => {
                    return <div className={styles.items}>
                        <div>
                            {e.Nomenklatura}
                        </div>
                        <div>
                            <button>Tezelemek</button>
                            <button>Silmek</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default _Products;