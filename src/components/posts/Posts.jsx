import React, { useState } from 'react'
import './post.css'
import GradeIcon from '@mui/icons-material/Grade';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Posts = ({ post }) => {
  const [like, setLike] = useState(post.like)
  const [liked, setLiked] = useState(false)

  const likeHandler = () => {
    setLike(liked ? like - 1 : like + 1)
    setLiked(!liked)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={post.photo} alt="" />
            <span className='postUsername'>{post.username}</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon/>
          </div>
        </div>

        <div className="postCenter">
          <div>
            <h4>{post?.desc}</h4>
            <img className='postImg' src={post.photo} alt="" />
          </div>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <GradeIcon className='likeIcon' onClick={likeHandler} />
            <span className='likeCount'>{like} people like it</span>
            <CommentIcon className='commentIcon'/>
            <span className='commentCount'>{post.comment} comments</span>
          </div>

          <div className="postBottomRight">
            <span className='sendIcon'><SendIcon /></span>
            <span className='addComment'>Add a comment</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Posts