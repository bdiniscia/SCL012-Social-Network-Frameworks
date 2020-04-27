import React, { Component } from 'react'
import './SignIn.sass'

export default class SignIn extends Component {
    render() {
        return (
            <div className="containerSignIn">
                <div className='signIn'>
                    <img alt='Logo of Beer Me Up' src={require('../img/logoBeer.png')} className='logoAuth' />
                    <h1 className='titleAuth'>Log In</h1>
                    <input className='inputsAuth'  type='email' placeholder='Tu correo electrónico'/>
                    <input className='inputsAuth'  type='password' placeholder='Tu contraseña'/>
                    <button className='buttonAuth submitButton'>Entrar</button>
                    <a href='#' className='forgotPass' >Se me olvidó mi contraseña</a>
                    <button className='buttonAuth buttonGoogle'>
                        Log in con 
                        <img alt='Logo of Google' src={require('../img/google-G.png')} className='googleLogo' />
                    </button>
                </div>
            </div>
        )
    }
}
