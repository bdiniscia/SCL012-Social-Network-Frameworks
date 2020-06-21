import StackGrid from "react-stack-grid";
import { useSelector, useDispatch } from 'react-redux';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CardPost from './Components/CardPost';
import './Home.sass';
import Modal from './Modal';
import { db } from '../Firebase/ConfigFirebase';
import ZoomPost from './Components/ZoomPost';
import { postAction } from '../Actions/index'


const Home = ({postsToRender, title}) => {
    const [ showCreatePost, setShowCreatPost ] = useState(false);
    // const [ beerPost, setBeerPost ] = useState(false);
    const [ infoZoom, setInfoZoom ] = useState(null);
    const [ showZoom, setShowZoom ] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser);
    const postsStore = useSelector(state => state.posts);


    // Trae los posts de Firebase
    useEffect(() => {
        postsToRender.onSnapshot((querySnapshot) => {
            const posts = [];

            querySnapshot.forEach(doc => {
                const infoPost =
                {
                    dataBeer: doc.data(),
                    id: doc.id,
                    currentUser: currentUser.uid,
                }
                posts.push(infoPost);
            });
            dispatch(postAction(posts));
            console.log('to zoom',posts);
        });
    }, [])

    // Muestra o esconde el modal
    const showModal = (boolean) => {
        setShowCreatPost(boolean);
    }

    const showIndividualPost = (boolean) => {
        setShowZoom(boolean);
    }

    const openZoom = (index) => {
        setInfoZoom(index);
        showIndividualPost(true);
    }

    return (
        <div>
            <Navbar showCreatePost={showCreatePost} showModal={() => showModal(true)} />
            {showCreatePost && <Modal closeModal={() => showModal(false)} />}
            {showZoom && <ZoomPost post={infoZoom} closeZoom={() => showIndividualPost(false)}/>}
            <section className='containerPosts'>
                <h1 className='titleHome'>{title}</h1>
                <StackGrid
                    columnWidth={260}
                    monitorImagesLoaded={true}
                >
                    {postsStore  &&
                        postsStore.map((post, i) => {
                            return (
                                <CardPost
                                    key={post.id}
                                    img={post.dataBeer.img}
                                    profilePic={post.dataBeer.user.photoURL}
                                    author={post.dataBeer.user.displayName}
                                    content={post.dataBeer.text}
                                    tags={post.dataBeer.tag}
                                    zoom={() => openZoom(i)}
                                    likes={post.dataBeer.like}
                                    id={post.id}
                                    currentUser={currentUser.uid}
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
