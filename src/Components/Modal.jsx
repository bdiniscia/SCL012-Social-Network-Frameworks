import React from 'react'
import './Modal.sass'

function Modal(props) {

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.closeModal}>&times;</span>
                <textarea className='textareaModal' placeholder='Cuéntanos... ¿Qué tal tu cerveza de hoy?'/>
                <img alt='Save post' src={require('../img/send.png')} className='sendButton'/>
            </div>
        </div>

    )
}

export default Modal
