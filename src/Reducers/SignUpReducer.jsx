const initState = {}

const SignUpReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SIGN_UP':
          return action.payload;
        default:
          return state;
    }
}

export default SignUpReducer;