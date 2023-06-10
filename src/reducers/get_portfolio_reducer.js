const getPortfolioReducer = (state = [], action) => {
    switch(action.type){
        case "GET_PORTFOLIO":
            return [...state, action.payload]
        default: 
            return [...state]
    }
}

export default getPortfolioReducer;