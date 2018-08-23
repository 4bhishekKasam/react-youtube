import React from 'react';
import './VideoDetail.css';

const VideoDetail = props => {
    if (!props.video) return null;

    let videoId = props.video.id.videoId,
        url = `https://youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail">
            <div className="video-detail-wrapper">
                <iframe src={url} title={props.video.title}
                    className="video-player" />
                <h3 className="main-video-title">
                    {props.video.snippet.title}
                </h3>
                <small className="main-video-channelTitle">
                    {props.video.snippet.channelTitle}
                </small>
                <br />
                <small className="main-video-description">
                    {props.video.snippet.description}
                </small>
            </div>

            {props.children}

        </div>
    );
}

export default VideoDetail;