import React from 'react'
import { useAppContext } from '../context/AppContext'
import SingleVideo from './SingleVideo';

const Explore = () => {
    const { videos } = useAppContext();
    return (
        <div>
            {
                videos.map((video) => (
                    <SingleVideo video={video} />
                ))
            }

        </div>
    )
}

export default Explore