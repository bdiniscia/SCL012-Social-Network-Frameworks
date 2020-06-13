import StackGrid from "react-stack-grid";

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CardPost from './Components/CardPost';
import './Home.sass';
import Modal from './Modal';
import { db } from '../Firebase/ConfigFirebase';
import ZoomPost from './Components/ZoomPost';


const Home = () => {
    const [ showCreatePost, setShowCreatPost ] = useState(false);
    const [ beerPost, setBeerPost ] = useState(false);
    const [ infoZoom, setInfoZoom ] = useState(null);
    const [ showZoom, setShowZoom ] = useState(false)

    // Trae los posts de Firebase
    useEffect(() => {
        const postsUploaded = db.collection('posts').orderBy('time', 'desc');
        postsUploaded.onSnapshot((querySnapshot) => {
            const posts = [];

            querySnapshot.forEach(doc => {
                const infoPost =
                {
                    dataBeer: doc.data(),
                    id: doc.id
                }
                posts.push(infoPost);
            });

            setBeerPost(posts)
            console.log(posts)
        });
    }, [])

    // Muestra o esconde el modal
    const showModal = (boolean) => {
        setShowCreatPost(boolean)
    }

    const showIndividualPost = (boolean) => {
        setShowZoom(boolean)
    }

    const openZoom = (post) => {
        console.log('>>From openZoom', post)
        setInfoZoom(post)
        showIndividualPost(true)
    }

    return (
        <div>
            <Navbar showCreatePost={showCreatePost} showModal={() => showModal(true)} />
            {showCreatePost && <Modal closeModal={() => showModal(false)} />}
            {showZoom && <ZoomPost post={infoZoom} closeZoom={() => showIndividualPost(false)}/>}
            <section className='containerPosts'>
                <StackGrid
                    columnWidth={260}
                    monitorImagesLoaded={true}
                >
                    {beerPost &&
                        beerPost.map(post => {
                            return (
                                <CardPost
                                    key={post.id}
                                    img={post.dataBeer.img}
                                    profilePic={post.dataBeer.user.photoURL}
                                    author={post.dataBeer.user.displayName}
                                    content={post.dataBeer.text}
                                    tags={post.dataBeer.tag}
                                    zoom={() => openZoom(post)}
                                />
                            )
                        })
                    }
                </StackGrid>
            </section>
        </div>
    )
}

export default Home
