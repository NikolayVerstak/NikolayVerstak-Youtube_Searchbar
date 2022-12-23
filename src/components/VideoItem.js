import React from "react";
import "../styles//VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    /* we pass prop video, that was mapped from videos;
    And callback onVideoSelect from App component to understand which video an user click on */
    return (
        /* to make sure that we call onVideoSelect with appropriate video 
        we create a new arrow function as a value for event onClick */
        <div onClick={() => onVideoSelect(video)} className="item video-item">
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url} //source for image of a video (size - medium)
                alt={video.snippet.title} //alt used when someone with disability issues is trying to use our application
            />
            <div className="content">
                <h5 className="header">{video.snippet.title}</h5>
            </div>
        </div>
    );
};

export default VideoItem;
