import {combineReducers} from 'redux'
import catCount from './catCount.js'
import user from './user.js'

export default combineReducers({catCount, user})