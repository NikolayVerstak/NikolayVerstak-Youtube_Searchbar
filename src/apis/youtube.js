import axios from "axios";
//API KEY to get access to YouTube API
const KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
    /* below necessary params for request ac. 
    to the YouTube API documentation */
    baseURL: "https://www.googleapis.com/youtube/v3",
    //we will make request to 'baseURL' + '/search' + '?params'
    params: {
        part: "snippet",
        type: "video",
        maxResults: 10,
        key: KEY,
    },
});
