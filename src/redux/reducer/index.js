import {GET_COIN} from '../action/index'
const intialState ={
    lists:[]
}

function userReducer(state=intialState,{type,payload}){
    switch(type){
        case GET_COIN:
            return { ...state, lists:payload };
            default:
                return state;
    }
}


export default userReducer;