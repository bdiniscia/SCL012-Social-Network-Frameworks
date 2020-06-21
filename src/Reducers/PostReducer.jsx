const initState = null;

const PostReducer = (state = initState, action) => {
    switch(action.type) {
        case 'POSTS':
          return action.payload;
        default:
          return state;
    }
}

export default PostReducer;