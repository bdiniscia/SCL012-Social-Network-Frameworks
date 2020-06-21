import { combineReducers } from 'redux';
import SignUpReducer from './SignUpReducer';
import PostReducer from './PostReducer'

const allReducers = combineReducers({
    currentUser: SignUpReducer,
    posts: PostReducer
})

export default allReducers


