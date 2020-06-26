import { combineReducers } from 'redux'
import reducer from './TodoPage/reducer';

const rootReducer = combineReducers({
    todo : reducer
})

export default rootReducer