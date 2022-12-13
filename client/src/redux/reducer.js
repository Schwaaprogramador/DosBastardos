import { GET_ESCRITOS, POST_ESCRITOS } from "./actions";

const initialState = {
    escritos: [],
    escritosDetail: [],
    post: '',
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_ESCRITOS:
            return {...state, escritos:action.payload}

        case POST_ESCRITOS:
            return {...state, post: action.payload}

        default:
            return {...state}
    }
}


export default rootReducer;