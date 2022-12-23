import React from "react";
import VideoItem from "./VideoItem";
import "../styles/VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
    //we pass props from App component
    const renderedList = videos.map((video) => {
        //map array of videos
        return (
            <div className="eight wide column" key={video.id.videoId}>
                <VideoItem
                    onVideoSelect={onVideoSelect} //we pass callback onVideoSelect from App to VideoItem
                    video={video} //and we map prop videos and pass a new object as a prop to VideoItem
                />
            </div>
        );
    });
    /* any time that this component is rendered onto the screen, 
    it will have a prop called prop.videos */
    return <div className="ui equal width grid video-list">{renderedList}</div>;
};

export default VideoList;
