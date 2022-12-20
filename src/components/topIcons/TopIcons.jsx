import React from 'react'
import './topIcons.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';


const TopIcons = () => {
  return (
    <div className='iconRow'>
      {/* <section>
        {/* <span><HomeIcon/></span> */}
        {/* <span>icon</span>
        <span>icon</span>
        <span>icon</span>
      </section> */} 
      <section className='firstTop'>
        <div className="searchGrp">
          <span className='searchIcon'><SearchIcon/></span>
          <input className='inputSearch' type="search" placeholder='Search people or posts' name="" id="" />
        </div>
        <img className='profilePic' src="/assets/flower5.jpg" alt="" />
      </section>
    </div>
  )
}

export default TopIcons