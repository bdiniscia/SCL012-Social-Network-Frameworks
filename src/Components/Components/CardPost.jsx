import React from 'react';
// import PropTypes from 'prop-types'
import './CardPost.sass';
import { postLike } from '../../Firebase/FirebaseFunctions';
import Heart from './Heart';

const CardPost = ({img, profilePic, author, likes, content, tags, zoom, id, currentUser}) => {
    return (
        <div className='divPost'>
            <img alt='Pic of the post' src={img} className='imgPost' onClick={zoom}/>    
            <div className='contentPost'>
                <div className='idPost flexRow'>
                    <div className='authorDiv flexRow'>
                        {profilePic ?
                        <img alt='Profile pic of the author' src={profilePic} className='userPicPost' />
                        :
                        <img alt='Profile pic of the author' src={require('../../img/user.png')} className='userPicPost' />
                        }
                        <h5 className='authorPost margin0'>{author}</h5>
                    </div>
                    <div className='likesDiv flexRow'>
                        <h5 className='numLikes margin0'>{likes.length}</h5>
                        { likes.includes(currentUser)
                        ?
                        <Heart className='heartLike likedPost' onClick={() => postLike(id, currentUser)}/>
                        :
                        <Heart className='heartLike' onClick={() => postLike(id, currentUser)}/>
                        }
                    </div>
                </div>
                <p className='textPost margin0'>{content}</p>
                {tags && <p className='tagsPost'>{tags}</p>}
            </div>
        </div>
    )
}

export default CardPost
