const initialState = {
    page: 1,
    limit: 9
}

export default function limitiReducer(state=initialState, action){
    switch(action.type){
        case 'INCR':
            return {...state, page: state.page+1}
        default:
            return {...state}
    }
}