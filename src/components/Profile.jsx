import React from 'react'
import profile from "../image/photo-1628890923662-2cb23c2e0cfe.avif"

export default function () {
  return (
   <section className='profile'>
    <div className='profile-container'>
      <div className='img-div'>
        <img id="profile__img" src={profile} alt="profile photo" />
      </div>
      <a  id="twitter" href="https://www.twitter.com/@abdul_oyewale">@abdul_oyewale</a>
      {/* <a  id="slack" href="https//:www.slack.com/JustAbdul">Connect on slack</a> */}
    </div>
   </section>
  )
}
