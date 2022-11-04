import React from 'react'
import gitlogo from '../image/Icon (1).png'
import hnglogo from '../image/vector (3).png'
import hnglogo2 from '../image/vector.png'
import hnglogo3 from '../image/vector (2).png'
import hnglogo4 from '../image/Vector (1).png'


export default function() {
  return (
    <>
    <section className='social'>
        <div className='grid-logo'>
            <img  id="logo1" src={hnglogo} alt="" />
            <img  id="logo2" src={hnglogo2} alt="" />
            <img  id="logo3" src={hnglogo3} alt="" />
            <img  id='logo4'src={hnglogo4} alt="" />
        </div>
        <div>
           <a href="https://www.github.com/Abdulz11">
                <img src={gitlogo} alt="" />
            </a>
        </div>
    </section>
    </>
  )
}
