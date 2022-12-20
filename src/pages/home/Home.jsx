import React from 'react'
import LeftSide from '../../components/leftside/LeftSide'
import Center from '../../components/center/Center'
import Right from '../../components/right/Right'
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <LeftSide/>
            <Center/>
            <Right/>
        </div>
    )
}

export default Home