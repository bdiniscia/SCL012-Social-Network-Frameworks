import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import CardPost from './Components/CardPost'
import './Home.sass'
import Modal from './Modal'
import { db } from '../Firebase/ConfigFirebase'


const Home = () => {

    const [showCreatePost, setShowCreatPost] = useState(false)
    const [ beerPost, setBeerPost ] = useState(false)

    useEffect(() => {
        const postsUploaded = db.collection('posts').orderBy('time', 'desc');
        postsUploaded.onSnapshot((querySnapshot) => {
            const posts = [];
    
            querySnapshot.forEach(doc => {
                const infoPost = 
                  { dataBeer: doc.data(),
                    id: doc.id }
                posts.push(infoPost);
            });

            setBeerPost(posts)
            console.log(posts)
        });
    }, [])

    const showModal = () => {
        setShowCreatPost(true)
        console.log('Mostrando Modal')
    }

    const closeModal = () => {
        setShowCreatPost(false)
    }

    return (
        <div>
            <Navbar showCreatePost={showCreatePost} showModal={() => showModal()}/>
            {showCreatePost && <Modal closeModal={() => closeModal()}/> }
            <section className='containerPosts'>
                { beerPost &&
                beerPost.map(post => {
                    return (
                        <CardPost 
                            key = { post.id }
                            img={post.dataBeer.img} 
                            profilePic={post.dataBeer.user.photoURL} 
                            author={post.dataBeer.user.displayName} 
                            likes='12' 
                            content={post.dataBeer.text}
                            tags='#Artesanal'
                        />
                    )
                })
                }
            </section>
        </div>
    )
}

export default Home
