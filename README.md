# Overview

This is an App similar to a YouTube browser application in approach and design.

At the very top, a user is going to enter some search term, then press Enter key which is going to trigger a search request.
With an external API, the App does a search for a list of videos matching that search term and shows them on the right-hand side of the screen.
A user can click on one of those videos and a selected video is going to be featured in the center. A title and a description of the video appear at the bottom as well.
A user can watch that video by clicking on the play button.

## Dependencies

This App makes a request over to the YouTube public free API to fetch the data (YouTube Data API v3).

## Appearance

This App has a responsive design.

![Web](/src/pics/Web_appearance.png)
![Mobile](/src/pics/Mobile_appearance.png)

## How-to launch locally

In the project directory, you can run:

-   Create .env-file and define an environmental variable called REACT_APP_API_KEY inside that file. The variable should be equal your API_KEY from a project in [https://console.cloud.google.com/]

    `REACT_APP_API_KEY=yourApiKeyWithoutQuotationMarks`

-   Install dependencies

    `npm install`

-   Start the project

    `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
