import React from 'react'
import './profile.css'
import PersonIcon from '@mui/icons-material/Person';


const Profile = () => {
    return (
        <div>
            
            <div className="profile">
                <PersonIcon fontSize='large' className='profileIcon'/>
                <div className='profileInfo'>
                    <h4>Kyler Hawkins</h4>
                    <h6>Senior Software Engineer</h6>
                </div>
            </div>
        </div>
    )
}

export default Profile