import React from 'react'
import './notifications.css'


const Notifications = ({ notif }) => {
  console.log(notif)
  return (
    <div className='notif'>
      <section className='notifGrpTop'>
        <h3 className='notifTitle'>Notifications</h3>
        <h5 className='more'>See all</h5>
      </section>
      <div className="singleNotif">
        <section className="notifProfile">
          <div>
            <img className='notifProfileImage' src='./assets/flower9.jpg' alt="" />
            <p className='handle'>@gregP</p>
          </div>
          <div className="notifText">
            <p>Greg Palmer wants to connect with you.</p>
          </div>
        </section>
        <section className='notifBtns'>
          <button className='btn'>Accept</button>
          <button className='btn'>Reject</button>
        </section>
      </div>

      <div className="singleNotif">
        {/* <section className='NotifGrpTop'>
          <h3 className='NotifText'>Notifications</h3>
          <h5>See all</h5>
        </section> */}
        <section className="notifProfile">
          <div>
            <img className='notifProfileImage' src='./assets/flower10.jpg' alt="" />
            <p className='handle'>@joeM</p>
          </div>
          <div className="notifText">
            <p>Joe McCarty wants to connect with you.</p>
          </div>
        </section>
        <section className='notifBtns'>
          <button className='btn'>Accept</button>
          <button className='btn'>Reject</button>
        </section>
      </div>

      <div className="singleNotif">
        {/* <section className='NotifGrpTop'>
          <h3 className='NotifText'>Notifications</h3>
          <h5>See all</h5>
        </section> */}
        <section className="notifProfile">
          <div>
            <img className='notifProfileImage' src='./assets/flower11.jpg' alt="" />
            <p className='handle'>@timR</p>
          </div>
          <div className="notifText">
            <p>Tim Ron wants to connect with you.</p>
          </div>
        </section>
        <section className='notifBtns'>
          <button className='btn'>Accept</button>
          <button className='btn'>Reject</button>
        </section>
      </div>
    </div>
  )
}

        {/* <img  src={notif.profilePicture} alt="" />
        <p>{notif.username} wants to connect with you</p>
        <p>{notif.userHandle}</p> */}
      
      
export default Notifications