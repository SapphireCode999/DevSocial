import React from 'react'
import LogoApp from '../logoApp/LogoApp'
import MenuCard from '../menuCard/MenuCard'
import Followers from '../followers/Followers'
import { Menu, Follower } from '../../data'
import './leftside.css'
import Profile from '../profile/Profile'
// import Profile from '../../pages/profile/Profile'

const LeftSide = () => {
    return (
        <div>
            <LogoApp />
            <Profile/>
            {Menu.map((menu) => (
                // <Posts key={post.id} post={post} />
                <MenuCard key={menu.id} menu={menu} className='menucard'/>
            ))}
            {/* <Followers/> */}
            <h3 className='followers'>Followers</h3>
            {Follower.map((follower) => (
                <Followers key={follower.id} follower={follower} />
            ))}
        </div>
    )
}

export default LeftSide