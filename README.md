# Kokanee Exploratory Project - Frontend

> A simple application that displays a comment list that automatically appends new messages as they arrive. The user can choose whether to automatically follow the stream of messages as they arrive. All comments include an author, a message, and the timestamp of when they were created. In order to load large numbers of comments without eating up the browser's memory, react-window was used to virtualize the list of comments to show only enough to fill the view port.

> Technology used: React, Next.JS, Typescript, HTML5, ES6, react-window, react-virtualized-auto-sizer, lorem-impsum, Material-UI

<img src="https://firebasestorage.googleapis.com/v0/b/pixabay-search-app.appspot.com/o/screenshot-home.png?alt=media&token=2504f115-ea55-4a17-9c5d-287a5f60d806" title="home-screenshot" alt="home-screenshot">

---

<img src="https://firebasestorage.googleapis.com/v0/b/pixabay-search-app.appspot.com/o/screenshot-comments.png?alt=media&token=f373d216-4656-479b-b0d5-1c0adeee8284" title="comments-screenshot" alt="comments-screenshot">

## Installation / Run Commands

- npm install - to install all packages and dependencies
- npm run dev - will run the application by default on port 3000 (localhost:3000)
- npm run build - to build the application for production

### Clone

- Clone this repo to your local machine using `git clone https://github.com/derferickc/kokanee-comments.git`

### Instructions

- Visit localhost:3000 to view the Application
- By default, 10 comments will load when the page loads
- Click 'Unfollow' button to stop the incoming stream of comments
- Click 'Follow' button to re-initiate the stream of comments