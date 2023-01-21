import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import useVideos from "../hooks/useVideos";
import "../styles/App.css";

const App = () => {
    /* selectedVideo allows to understand which video a user chose */
    const [selectedVideo, setSelectedVideo] = useState(null);
    //those element from custom hook: list of videos and function to search for videos with new term
    const [videos, search] = useVideos("motivation"); //custom hook requires a default search term

    // we take the first video of that list and set it as a selected video
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]); //as soon as the video list is updated

    return (
        <div className="ui container main">
            <h1 className="ui header">VIDEO SEARCH</h1>
            {/* onFormSubmit is a prop that we pass to SearchBar */}
            <SearchBar onFormSubmit={search} />
            <div className="ui equal width grid">
                <div className="column" id="content">
                    <div className="row" id="screen">
                        {/* we pass down a single object 'video' as a prop to VideoDetails */}
                        <VideoDetails video={selectedVideo} />
                    </div>
                    <div className={!selectedVideo ? "displayNone" : "row "} id="videoList">
                        <div className="ui segment">
                            {/* we pass a prop that equals State 'videos' and callback function 'onVideoSelect' */}
                            <VideoList
                                onVideoSelect={setSelectedVideo} //callback that works when an user clicks on some video
                                videos={videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
