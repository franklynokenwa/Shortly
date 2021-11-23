import counterReducer from './CounterReducer'
import isLoggedReducer from './IsLoggedReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counterReducer: counterReducer,
    isLoggedReducer: isLoggedReducer
})

export default allReducers