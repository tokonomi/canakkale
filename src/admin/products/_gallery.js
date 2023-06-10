import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../admin.module.css"

const _Gallery = () => {
    let [galleryCollection, setGalleryCollection] = useState([])
    let [galleryTitle, setGalleryTitle] = useState('')
    
        async function deleteGalleryItem(image, id){
            try{
                const response = await axios.delete(`http://localhost:5500/gallery/delete/${image}/${id}`);
                const newGalleryList = galleryCollection.filter(i => i._id !== id)
                setGalleryCollection(newGalleryList)
                console.log(response)
            }catch(err){
                console.log(err)
            }
        }
        async function addGalleryItem(e){
            e.preventDefault();
            try{
                const res = await axios.post('http://localhost:5500/gallery/add_gallery', {title: galleryTitle, images: galleryTitle})
                setGalleryCollection(prev => [...prev, res.data])
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        }
        useEffect(() => {
            async function getCollection (){
            try{
                const res = await axios.get(`http://localhost:5500/gallery/all_items`)
                setGalleryCollection(res.data)
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
            }
            getCollection()
        }, [])
    return(
        <div>
            <h1>Gallery list</h1>
            <div>
                    <form className={styles.form} onSubmit={e => addGalleryItem(e)}>
                        <input type="text" placeholder="Gallery ucun " onChange={(e) => {setGalleryTitle(e.target.value)}}/>
                        <input type="submit"/>
                    </form>
            </div>
            {
                galleryCollection.map(e => {
                    // Нам нужно для картинок в gallery создать отдельные папки для каждой группы картин  
                    return <div className={styles.items}>
                        <div>
                            {e.title}
                        </div>
                        <div>
                            <button>Tezelemek</button>
                            <button onClick={() => {deleteGalleryItem(e.images, e._id)}}>Silmek</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default _Gallery;