import React from 'react';
import './ZoomPost.sass';
import Heart from './Heart';
import { postLike } from '../../Firebase/FirebaseFunctions';
import { useSelector } from 'react-redux';

const ZoomPost = (props) => {
    const postsStore = useSelector(state => state.posts);
    const index = props.post;
    
    return (
        <div className='overlayZoom'>
            <div className='divZoom'>
                <span className="closeZoom" onClick={props.closeZoom}>&times;</span>
                <img alt='Pic of the post' src={postsStore[index].dataBeer.img} className='imgZoom' />
                <div className='contentPost contentZoom'>
                    <div className='idPost flexRow'>
                        <div className='authorDiv flexRow'>
                            {postsStore[index].dataBeer.user.photoURL ?
                            <img alt='Profile pic of the author' src={postsStore[index].dataBeer.user.photoURL} className='userPicPost' />
                            :
                            <img alt='Profile pic of the author' src={require('../../img/user.png')} className='userPicPost' />
                            }
                            <h5 className='authorPost margin0'>{postsStore[index].dataBeer.user.displayName}</h5>
                        </div>
                        <div className='likesDiv flexRow'>
                            <h5 className='numLikes margin0'>{postsStore[index].dataBeer.like.length}</h5>
                            { postsStore[index].dataBeer.like.includes(postsStore[index].currentUser)
                            ?
                            <Heart className='heartLike likedPost' onClick={() => postLike(postsStore[index].id, postsStore[index].currentUser)}/>
                            :
                            <Heart className='heartLike' onClick={() => postLike(postsStore[index].id, postsStore[index].currentUser)}/>
                            }
                        </div>
                    </div>
                    <p className='textPost margin0'>{postsStore[index].dataBeer.text}</p>
                    {postsStore[index].dataBeer.tag && <p className='tagsPost'>{postsStore[index].dataBeer.tag}</p>}
                </div>
            </div>
        </div>
    )
}

export default ZoomPost
