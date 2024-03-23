import React from 'react'

export default function Header() {
    return (
        <section id="hero">
          <video autoPlay muted loop id="myVideo" class="w-100">
    <source src="/image/Untitled video - Made with Clipchamp.mp4" type="video/mp4" />
  </video>
            <div className="heading-container">
                <div className="title">
                    <h1>$URANUS Web</h1>
                    <p>In Crypto We Trust, But In Uranus, We Believe!</p>
                    <div className="title-button-conatiner w-100">
                        <button className="btn btn-lg btn-danger">Discover More</button>
                        <button className="btn btn-lg btn-danger">Get a token now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
