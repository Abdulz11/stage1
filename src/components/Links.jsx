import React from 'react'

export default function () {
    const slackUserName = "JustAbdul"
  return (
    <div className='link-container'>
        <button className='btn'>
            <a  id='btn__zuri' href="https://training.zuri.team/">
               <p>ZURI</p>
            </a>
        </button>
        <button className='btn'>
            <a id='books' href="https://books.zuri.team">
               <p>GET BOOKS</p>
               <p>Thousands of books to help you master design and coding</p>
            </a>
        </button>
        <button className='btn'>
            <a id='book__python' href={`https://books.zuri.team/python-for-beginners?ref_id=${slackUserName}`}>
              <p> WANT TO LEARN PYTHON</p>
              <p>Get the python-for-beginners to help start your journey as a  python programmer for only $4.99  </p>

            </a>
        </button>
        <button className='btn'>
            <a  id='pitch' href="https://background.zuri.team">
                <p>BACKGROUND CHECKS</p>
                <p>  Find out who your team members really are with  background check for coders</p>
            </a>
        </button>
        <button className='btn'>
            <a id='book__design' href="https://books.zuri.team/design-rules">
              <p>READY TO UP YOUR DESIGN SKILLS</p>
             <p> Get the ultimate design rules  book from zuri for FREE</p>
            </a>
        </button>
       
    </div>
  )
}
