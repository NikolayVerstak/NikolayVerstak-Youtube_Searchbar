import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    /* we take a list of videos and set them as state
    When component is created for the first time, it has empty property this.state.videos */
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        //this function will run only once after an initial render
        search(defaultSearchTerm);
    }, []);

    /* making an API request is an asynchronous operation
    that's why we should use async-await*/
    const search = async (term) => {
        //callback when someone submits the SearchBar form
        const response = await youtube.get("/search", {
            //make request to YouTube API
            params: {
                //define query string parametr that equals user's search term
                q: term /* called 'q' specifically because that is
                what the YouTube API documentation told us */,
            },
        });
        //after a user searched for smth we update list of videos using setVideos
        setVideos(response.data.items);
    };
    return [videos, search];
};

export default useVideos;
