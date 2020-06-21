export const signUpAction = (user) => {
    return {
        type: 'SIGN_UP',
        payload: user
    }
}

export const postAction = (posts) => {
    return {
        type: 'POSTS',
        payload: posts
    }
}