import React from 'react'
import './followers.css'

const Followers = ({ follower }) => {

  return (
    <div className='follow'>
      <div className='followerInfo'>
        <img className='followersPic' src={follower.profilePicture} alt="" />
        <div>
          <h5>{follower.username}</h5>
          {follower.userHandle}
        </div>
      </div>
      <div>
        <button className='followBtn'>
          Follow
        </button>
      </div>
    </div>
  )
}

export default Followers