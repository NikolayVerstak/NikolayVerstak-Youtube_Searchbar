import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import "../styles/VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
    //check screen width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    //if width was changed, update State
    const setWindowDimensions = (e) => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", (e) => setWindowDimensions(e), {
            passive: false,
        });
        return () => {
            window.removeEventListener("resize", (e) => setWindowDimensions(e));
        };
    }, []);
    //we pass props from App component
    const renderedList = videos.map((video) => {
        //video list direction based on the screen width
        const bigScreen = windowWidth > 1200 ? "row" : "column";
        //map array of videos
        return (
            <div className={`eight wide ${bigScreen}`} key={video.id.videoId}>
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
