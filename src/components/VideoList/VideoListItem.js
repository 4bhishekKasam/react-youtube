import React from 'react';
import './VideoList.css';

const VideoListItem = props => {
    const videoData = {
        title: props.snippet.title,
        img: props.snippet.thumbnails.default.url,
        channel: props.snippet.channelTitle,
    }

    return (
        <div className="list-group-item">
            <li className="list-item" onClick={() => props.onVideoSelect(props)}>
                <img src={videoData.img} alt={videoData.title} className="poster" />
                <div className="detail-container">
                    <span className="video-list-title">
                        {videoData.title}
                    </span>
                    <small className="channelName">
                        {videoData.channel}
                    </small>
                </div>
            </li>
        </div>
    );
}


export default VideoListItem;