import axios from "axios"

export const getImagesAsync = (e) => {
    return async function(dispatch){
        let response = await axios.get(`http://localhost:5500/api/images_list/${e.Çeşid}/${e.Ölkə}/${e.Brend}/${e.Brend} ${e.Çeşid}/${e.Brend} ${e.Çeşid} ${e.Ölçü}/${e.Nomenklatura}`)
        dispatch({
            type:'GET_IMAGES',
            payload: response.data || []
        })
    }
}

export const getProductsAsync = (page) => {
    return async function(dispatch, getState) {
        let response = await axios.get(`http://localhost:5500/api/items?page=${page}&limit=9`)
        dispatch({
            type: 'GET_PRODUCT_LIST',
            payload: response.data || []
        })
    }
}

export const getPortfolio = (obj) => {
    return{
        type: "GET_PORTFOLIO",
        payload: obj
    }
}