import React, { Component } from 'react'
import Button from './Components/Button'
import { Link } from "react-router-dom"
import './SignIn.sass'

export default class SignIn extends Component {
    render() {
        return (
            <div className="backgroungAuth">
                <div className='containerAuth'>
                    <img alt='Logo of Beer Me Up' src={require('../img/logoBeer.png')} className='logoAuth' />
                    <h1 className='titleAuth'>Log In</h1>
                    <input className='inputsAuth'  type='email' placeholder='Tu correo electrónico'/>
                    <input className='inputsAuth'  type='password' placeholder='Tu contraseña'/>
                    <Button title='Entrar'/>
                    <a href='#' className='forgotPass' >Se me olvidó mi contraseña</a>
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
}
