import React from 'react'
import './messageBox.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const MessageBox = () => {
  return (
    <div className='messageBox'>
      <div className='innerContent'>
        <section className='chatID'>
          <img className='chatPhoto' src="assets/flower5.jpg" alt="" />
          <input className='text' placeholder='Have something to tell us?' type="text" />
        </section>
        <hr className='hr'/>
        <div>
          <section className='chatIcons'>
            <div className="shareOption">
              <AddAPhotoIcon className='postIcon'/>
              <span className='shareSpan'>Upload picture</span>
            </div>

            <div className="shareOption">
              <PlayCircleIcon className='postIcon'/>
              <span className='shareSpan'>Video</span>
            </div>

            <div className="shareOption">
              <LocationOnIcon className='postIcon'/>
              <span className='shareSpan'>Location</span>
            </div>
            <div className="shareOption">
              <CalendarMonthIcon className='postIcon'/>
              <span className='shareSpan'>Schedule</span>
            </div>
          
            <div>
              <button className='postBtn'>Post</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default MessageBox