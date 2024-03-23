import React from 'react'

export default function Video() {
    return (
        <section id="video">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="video-container">
                            <iframe class="video-size" src="https://www.youtube.com/embed/gI7qfHuLQ6Q?si=RmaoxVwEZvxQbNe"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="video-container">
                            <iframe class="video-size" src="https://www.youtube.com/embed/snbTCWL6rxo?si=viF5x9iwVdgXiXiG"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    {/* <div class="col-lg-4">
                <div class="video-container">
                    <iframe class="video-size" src="https://youtube.com/embed/f5pGF3xhfFs?si=4B8TYRTd9lNM2Aow"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div> */}
                </div>
            </div>
            <hr />
        </section>
    )
}
