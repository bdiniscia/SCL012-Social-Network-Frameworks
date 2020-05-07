import React, { useState } from 'react'
import Navbar from './Navbar'
import CardPost from './Components/CardPost'
import './Home.sass'


const Home = () => {

    return (
        <div>
            <Navbar />
            <section className='containerPosts'>
                <CardPost 
                    img={require('../img/img-post.jpg')} 
                    profilePic={require('../img/user.png')} 
                    author='Bdiniscia' 
                    likes='12' 
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque gravida justo a pulvinar' 
                    tags='#Artesanal'
                />
                <CardPost 
                    img={require('../img/img-post.jpg')} 
                    profilePic={require('../img/user.png')} 
                    author='Bdiniscia' 
                    likes='12' 
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque gravida justo a pulvinar' 
                    tags='#Artesanal'
                />
                <CardPost 
                    img={require('../img/img-post.jpg')} 
                    profilePic={require('../img/user.png')} 
                    author='Bdiniscia' 
                    likes='12' 
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque gravida justo a pulvinar' 
                    tags='#Artesanal'
                />
                <CardPost 
                    img={require('../img/img-post.jpg')} 
                    profilePic={require('../img/user.png')} 
                    author='Bdiniscia' 
                    likes='12' 
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque gravida justo a pulvinar' 
                    tags='#Artesanal'
                />
            </section>
        </div>
    )
}

export default Home
