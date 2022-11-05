import React from 'react'
import profile from "../image/profile__img.png"

export default function () {
  return (
   <section className='profile'>
      <div className='profile-container'>
        <div className='img-div'>
          <img id="profile__img" src={profile} alt="profile photo" />
        </div>
        <h3 className='title-name'>Annette Black</h3>
        {/* <a  id="slack" href="https//:www.slack.com/JustAbdul">Connect on slack</a> */}
      </div>
   </section>
  )
}
