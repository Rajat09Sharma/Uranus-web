import React from 'react'

export default function Partner() {
  return (
    <section id="scroll-text">
    <h2>Trusted Partner</h2>
    <marquee scrollamount="15">
        <div className='d-flex justify-content-evenly'>
            <img src="/image/partner-1.png" className="partner-images"/>
            <img src="/image/partner-2.png" className="partner-images"/>
            <img src="/image/partner-3.png" className="partner-images"/>
            <img src="/image/partner-4.png" className="partner-images extra-margin"/>
            <img src="/image/partner-5.png" className="partner-images"/>
        </div>
    </marquee>
</section>
  )
}
