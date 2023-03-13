import * as types from './actionType'
const initialState = {
    todos:[],
    todo:{},
    loading:true
    
}
const todosReducers = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_TODOS:
            return {
                ...state,
                todos:action.payload,
                loading:false
            };
            case types.DELETE_TODOS:
                return {
                    ...state,
                    loading:false
                };
                case types.UPDATE_TODOS:
                return {
                    ...state,
                    loading:false
                };
                case types.CREATE_TODOS:
                return {
                    ...state,
                    loading:false
                }
        default:
            return state
    }
}


export default todosReducers;