import { FETCH_DATA_REQUEST,FETCH_DATA_SUCESS,FETCH_DATA_FAILURE } from "./thunkActions";




const initailastate = {
    data: [],
    loading: false,
    error:null,
};

const thunkreducer = (state = initailastate,action) => {
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return{...state,loading:true,error:null};
            case FETCH_DATA_SUCESS :
                return {...state,loading:false,error:action.payload  };
                case FETCH_DATA_FAILURE:
                    return {...state,loading:false,error:action.payload};
                    default:
                        return state
    }

};

export default thunkreducer;