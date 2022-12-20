import React from 'react'
import MessageBox from '../messageBox/MessageBox'
import Posts from '../posts/Posts'
import Story from '../story/Story'
import { PostData } from '../../data'

const Center = () => {
  return (
    <div>
      <Story />
      
      <MessageBox />
      
      {PostData.map((post) => (
        <Posts key={post.id} post={post} />
        ))}
    </div>
  )
}

export default Center