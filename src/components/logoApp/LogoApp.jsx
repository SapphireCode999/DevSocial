import React from 'react'
import './logoApp.css'
// import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

const LogoApp = () => {
    return (
        <div>
            <div className="logo">
                <ForumIcon fontSize='large' className='forumicon'/>
                <h3 className='logoText'>DevSocial</h3>
            </div>
            {/* <div className="profile">
                <PersonIcon/>
                <div className='profileInfo'>
                    <h4>Name</h4>
                    <h6>Job</h6>
                </div>
            </div> */}
        </div>
    )
}

export default LogoApp