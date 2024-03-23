import React from 'react'

export default function EventBox({imgSource,info}) {
  return (
    <div class="col-lg-3 event-container">
    <div class="event-box">
        <img src={imgSource} alt="Image-1" class="event-img" />
        <p>{info}</p>
    </div>
</div>
  )
}
