const getImagesReducer = (state = [], action) => {
    switch(action.type){
        case "GET_IMAGES":
            return [...state, action.payload]
        default: return [...state]
    }
}

export default getImagesReducer;