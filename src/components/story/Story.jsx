import React from 'react'
import './story.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Story = () => {
    return (
        <div className='storyPics'>
            <img className='singlePic' src="assets/flower6.jpg" alt="" />
            <img className='singlePic' src="assets/flower7.jpg" alt="" />
            <img className='singlePic' src="assets/flower8.jpg" alt="" />
            <img className='singlePic' src="assets/flower9.jpg" alt="" />
            <img className='singlePic' src="assets/flower10.jpg" alt="" />
            <div className="addStory">
                Add Story
                <AddCircleOutlineIcon/>
            </div>
        </div>
    )
}

export default Story