import zurilogo from '../image/Vector (4).png'
import lastlogo from '../image/I4G.png'
import hngmotto from '../image/Footer text.png'

export default function FooterLogos () {
 return (
    <footer>
        <div className='footer-container'>
            <div className="zuri-logo">
                <img src={zurilogo} alt="" />
            </div>
            <div className="hng-motto">
                <img src={hngmotto} alt="" />
            </div>
            <div className="last-logo">
                <img src={lastlogo} alt="" />
            </div>
        </div>
    </footer>
  )
}
