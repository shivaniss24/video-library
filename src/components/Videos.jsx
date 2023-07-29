import React from 'react'
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';
import SingleVideo from './SingleVideo';

const Videos = ({ category }) => {
    const [display, setDisplay] = useState(true);
    const [video, setVideo] = useState(null);

    const { videos } = useAppContext();
    const handleVideo = (video) => {
        setVideo(video)
        setDisplay(false)
    }

    const filteredVideos = !category ? videos : videos.filter((video) => video.category === category);
    return (
        <div className='row'>

            {
                display ?
                    filteredVideos.map((video) => (
                        <div className='col' onClick={(e) => handleVideo(video)}>
                            <div className=" card small">
                                <div className="card-image">
                                    <img src={video.thumbnail} />
                                </div>
                                <div className="card-content">
                                    <span>{video.title}</span>
                                </div>
                            </div>
                        </div>
                    ))




                    :
                    <div>
                        <SingleVideo video={video} />
                    </div>
            }
        </div >
    )
}

export default Videos