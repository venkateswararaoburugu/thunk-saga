import { FETCH_DATA_fAILURE, FETCH_DATA_SUCESS } from "./actions";



const initialState = {
    data: [],
    error:null,
};

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_DATA_SUCESS :
            return {...state,data:action.payload,error:null};
            case FETCH_DATA_fAILURE :
                return {...state,error:action.payload};
                default:
                    return state
    }
}

export default reducer