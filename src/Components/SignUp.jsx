import React, { Component } from 'react'
import Button from './Components/Button'
import { Link } from "react-router-dom"
import './SignIn.sass'


export default class SignUp extends Component {
    render() {
        return (
            <div className='backgroungAuth'>
                <div className='containerAuth'>
                    <img alt='Logo of Beer Me Up' src={require('../img/logoBeer.png')} className='logoAuth' />
                    <h1 className='titleAuth'>Regístrate</h1>
                    <input className='inputsAuth'  type='text' placeholder='Tu nombre'/>
                    <input className='inputsAuth'  type='email' placeholder='Tu correo electrónico'/>
                    <input className='inputsAuth'  type='password' placeholder='Tu contraseña'/>
                    <Button title='Registrarme'/>
                    <button className='buttonAuth buttonGoogle'>
                        Sign up con 
                        <img alt='Logo of Google' src={require('../img/google-G.png')} className='googleLogo' />
                    </button>
                    <Link to='/SignIn'>
                        <p className='forgotPass toggleAuth'>Ya tengo cuenta</p>
                    </Link>
                </div>
            </div>
        )
    }
}