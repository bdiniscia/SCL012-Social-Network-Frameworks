import { combineReducers } from 'redux'
import SignUpReducer from './SignUpReducer'

const allReducers = combineReducers({
    currentUser: SignUpReducer,
})

export default allReducers


