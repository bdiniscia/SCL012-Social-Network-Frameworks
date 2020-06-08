import React, { useState } from 'react'
import './Modal.sass'
import { db, storage } from '../Firebase/ConfigFirebase'
import { useSelector, useDispatch } from 'react-redux'

const Modal = (props) => {

    const [textPost, setTextPost] = useState('')
    const [imagePost, setImagePost] = useState('')
    const currentUser = useSelector(state => state.currentUser)

    const handleChangeText = (e) => {
        e.preventDefault()
        const text = e.target.value
        setTextPost(text)
    }

    const handleChangeImage = (e) => {
        e.preventDefault(e)
        if (e.target.files[0]) {
            console.log(e.target.files[0])
            const image = e.target.files[0]
            setImagePost(image)
        }
    } 

    const handleUpload = () => {
        return new Promise ((resolve, reject) => {
            const image = imagePost
            const uploadTask = storage.ref(`images/${image.name}`).put(image)
            uploadTask.on('state_changed', 
            (snapshot) => {
                // progress function
            }, (error) => {
                // error function
                console.log(error)
                return reject(error)
            }, () => {
                // complete function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    return resolve(url)
                })
            })
        })
    }

    const savePost = () => {
        handleUpload()
            .then(photo => {
                db.collection('posts').add({
                    user: currentUser,
                    text: textPost,
                    time: new Date(),
                    img: photo,
                })
            })
            .then(() => {
                setTextPost('')
                setImagePost('')
                props.closeModal()
            })
            .catch((error) => {
                console.log('Error ', error);
            });
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.closeModal}>&times;</span>
                <textarea onChange={e => handleChangeText(e)} className='textareaModal' placeholder='Cuéntanos... ¿Qué tal tu cerveza de hoy?'/>
                <input type='file' onChange={e => handleChangeImage(e)}/>
                <img alt='Save post' src={require('../img/send.png')} onClick={() => savePost()} className='sendButton'/>
            </div>
        </div>
    )
}

export default Modal
