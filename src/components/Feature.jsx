import React from 'react'
import EventBox from './EventBox'

export default function Feature() {
    return (
        <section id="event" className="hidden">
            <h2>The Memeifesto</h2>
            <p>Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope</p>
            <div class="row">
            <EventBox imgSource="/image/1.png" info="Everyone Loves to Pump Uranus more then they like when Uranus Dumps." />
            <EventBox imgSource="/image/2.png" info="The liquidity injections just keep coming into Uranus." />
            <EventBox imgSource="/image/3.png" info="Hold onto Uranus!" />
            <EventBox imgSource="/image/4.png" info="This is all in good fun – a blend of memes, astrology, and crypto. We will not go moon, we going to Uranus." />
            </div>
        </section>
    )
}
