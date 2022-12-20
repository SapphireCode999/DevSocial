import React from 'react'
import './trending.css'

const Trending = ({topic}) => {
    return (
        <div className='allTrending'>
            <h3 className='title'>Trending topics</h3>
            <div className="trending">
                <div># Health</div>
                <div className='shareCount'>350k shares...</div>
            </div>

            <div className="trending">
                <div># News</div>
                <div className='shareCount'>430k shares...</div>
            </div>

            <div className="trending">
                <div># Technology</div>
                <div className='shareCount'>550k shares...</div>
            </div>

            <div className="trending">
                <div># Education</div>
                <div className='shareCount'>340k shares...</div>
            </div>

            <div className="trending">
                <div># Sports</div>
                <div className='shareCount'>920k shares...</div>
            </div>

            <div className="more">Show more</div>
        </div>
    )
//     {
//         id:1,
//         shares: ,
//         title: "Home",
//     },
//     {
//         id:2,
//         shares: "430k shares",
//         title: "Messages",
//     },
//     {
//         id:3,
//         shares: "220k shares",
//         title: "Bookmark",
//     },
//     {
//         id:4,
//         shares: "472k shares",
//         title: "Groups",
//     },
//     {
//         id:5,
//         shares: "703k shares",
//         title: "Events",
//     },
//     {
//         id:6,
//         shares: "640k shares",
//         title: "Following",
//     },
//     {
//         id:7,
//         shares: "459k shares",
//         title: "Videos"
//     },
// ]

}

export default Trending