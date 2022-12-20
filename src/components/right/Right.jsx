import React from 'react'
import Notifications from '../notifications/Notifications'
import TopIcons from '../topIcons/TopIcons'
import Trending from '../trending/Trending'
import {TrendingTopics} from '../../data'
// import {Notifs} from '../../data'

const Right = () => {
  return (
    <div className='right'>
      <TopIcons />
      <Notifications/>
      {/* {Notifs.map = ((notif) => (
        <Notifications key={notif.id} notif={notif}/>
      ))} */}
      {/* {TrendingTopics.map = ((topic) => ( */}
      <Trending/>
        {/* // key={topic.id} topic={topic} /> */}
      {/* // ))} */}
      
    </div>
  )
}

export default Right