export const signUpAction = (user) => {
    return {
        type: 'SIGN_UP',
        payload: user
    }
}