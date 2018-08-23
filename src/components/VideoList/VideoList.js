import React from 'react';
import './VideoList.css';
import VideoListItem from './VideoListItem';

const VideoList = props => {

    let videos = props.videos.map(video =>
        <VideoListItem {...video}
            key={video.etag}
            onVideoSelect={props.onVideoSelect} />
    );

    return (
        <ul className="video-list-wrapper">
            {videos}
        </ul>
    );
}

export default VideoList;