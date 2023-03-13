import {combineReducers} from 'redux'
import todosReducers from './reducer'
const rootReducer = combineReducers({
    data: todosReducers
})
export default rootReducer