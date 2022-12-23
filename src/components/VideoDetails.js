import React from "react";
import "../styles/VideoDetails.css";

const VideoDetails = ({ video }) => {
    /* instead of writting 'props', 
we destructured it as a particular object 'video'. 
After instead props.video -> video */
    if (!video) {
        return (
            <div className="ui segment loading">
                <div className="ui active dimmer">
                    <div className="ui large text loader">
                        Please wait,
                        <p>your video is loading ...</p>
                    </div>
                </div>
            </div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`; //link to embed video from YouTube

    return (
        <div>
            {/* UI embed class tells that we're about to put an embedded video player inside the div */}
            <div className="ui embed">
                {/* iframe tag makes a request to some outside website */}
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment details">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetails;
