const productListReducer = (state = [], action) => {
    switch(action.type){
        case "GET_PRODUCT_LIST":
            state = state.concat(action.payload)
            return state
        default: return [...state]
    }
}

export default productListReducer;