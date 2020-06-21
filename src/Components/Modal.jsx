import React, { useState } from 'react'
import './Modal.sass'
import { db, storage } from '../Firebase/ConfigFirebase'
import { useSelector } from 'react-redux'

const Modal = (props) => {

    const [textPost, setTextPost] = useState('')
    const [tagPost, setTagPost] = useState('')
    const [imagePost, setImagePost] = useState('')
    const [progress, setProgress] = useState(0)
    const currentUser = useSelector(state => state.currentUser)

    const handleChangeText = (e) => {
        e.preventDefault()
        const text = e.target.value
        setTextPost(text)
    }

    const handleChangeTag = (e) => {
        e.preventDefault()
        const text = e.target.value
        setTagPost(text)
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
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            }, (error) => {
                // error function
                console.log(error);
                return reject(error);
            }, () => {
                // complete function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    return resolve(url);
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
                    tag: tagPost,
                    like: []
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
                <div className='file-div'>
                    <label name="tag-post" >Etiqueta: </label>
                    <input name="tag-post" onChange={e => handleChangeTag(e)} className="tag-post" type="text" placeholder="Ejemplo: #Artesanal"/>
                </div>
                <div className='file-div'>
                    <input type='file' onChange={e => handleChangeImage(e)}/>
                    <progress value={progress} max="100" />
                </div>
                <img alt='Save post' src={require('../img/send.png')} onClick={() => savePost()} className='sendButton'/>
            </div>
        </div>
    )
}

export default Modal
