import React from 'react'

const SingleVideo = ({ video }) => {

    return (
        <div className='row'>

            <div class="video-container">
                <iframe width="853" height="480" src={video.src} frameborder="0" allowfullscreen></iframe>
            </div>
        </div >
    )
}

export default SingleVideo