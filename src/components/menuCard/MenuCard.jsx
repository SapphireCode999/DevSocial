import React from 'react'
import './menuCard.css'



const MenuCard = ({menu}) => {
    return (
        <div className="allMenu">
            <div className='menuList'>
                <h5 className='menu'>{menu.name}</h5>
            </div>
        </div>
    )
}

export default MenuCard