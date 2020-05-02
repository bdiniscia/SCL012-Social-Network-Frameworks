import React, { useState } from 'react'
import Button from './Components/Button'
import { Link } from "react-router-dom"
import './SignIn.sass'
import { auth } from '../Firebase/ConfigFirebase'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.id === 'email') {
            setEmail(e.target.value)
            return
        }
        if (e.target.id === 'password') {
            setPassword(e.target.value)
            return
        }
    }

    const signInUser = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(() => localStorage.setItem('user', JSON.stringify({
                displayName : auth.currentUser.displayName,
                email: auth.currentUser.email,
                uid: auth.currentUser.uid,
                emailVerified: auth.currentUser.emailVerified,
                photoURL: auth.currentUser.photoURL})))
            .then(() => window.location.pathname = '/Home')
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                alert(errorMessage);
            // ...
            });
    };


    return (
        <div className="backgroungAuth">
            <div className='containerAuth'>
                <Link to='/' className='link'>
                  <img alt='Logo of Beer Me Up' src={require('../img/logoBeer.png')} className='logoAuth' />
                </Link>
                <h1 className='titleAuth'>Log In</h1>
                <input className='inputsAuth'  id='email' type='email' placeholder='Tu correo electrónico' onChange={ e => handleChange(e)}/>
                <input className='inputsAuth'  id='password' type='password' placeholder='Tu contraseña' onChange={ e => handleChange(e)}/>
                <Button title='Entrar' onClick={() => signInUser(email, password)}/>
                <Link to='/ForgotPassword'>
                    <p className='forgotPass' >Olvidé mi contraseña</p>
                </Link>
                <button className='buttonAuth buttonGoogle'>
                    Log in con 
                    <img alt='Logo of Google' src={require('../img/google-G.png')} className='googleLogo' />
                </button>
                <Link to='/SignUp'>
                    <p className='forgotPass toggleAuth' >No tengo cuenta</p>
                </Link>
            </div>
        </div>
    )
}

export default SignIn;
