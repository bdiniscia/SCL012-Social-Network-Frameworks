import React from 'react'
import './ZoomPost.sass'

const ZoomPost = (props) => {
    return (
        <div className='overlayZoom'>
            <div className='divZoom'>
                <span className="closeZoom" onClick={props.closeZoom}>&times;</span>
                <img alt='Pic of the post' src={props.post.dataBeer.img} className='imgZoom' />
                <div className='contentPost contentZoom'>
                    <div className='idPost flexRow'>
                        <div className='authorDiv flexRow'>
                            <img alt='Profile pic of the author' src={props.post.dataBeer.user.photoURL} className='userPicPost' />
                            <h5 className='authorPost margin0'>{props.post.dataBeer.user.displayName}</h5>
                        </div>
                        <div className='likesDiv flexRow'>
                            <h5 className='numLikes margin0'>12</h5>
                            <img alt='Button of like' src={require('../../img/heart.png')} className='heartLike'/>
                        </div>
                    </div>
                    <p className='textPost margin0'>{props.post.dataBeer.text}</p>
                    {props.post.dataBeer.tag && <p className='tagsPost'>{props.post.dataBeer.tag}</p>}
                </div>
            </div>
        </div>
    )
}

export default ZoomPost
