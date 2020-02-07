# Kokanee Exploratory Project - Frontend

> A simple application that displays a comment list that automatically appends new messages as they arrive. The user can choose whether to automatically follow the stream of messages as they arrive. All comments include an author, a message, and the timestamp of when they were created. In order to load large numbers of comments without eating up the browser's memory, react-window was used to virtualize the list of comments to show only enough to fill the view port.

> Technology used: React, Next.JS, Typescript, HTML5, ES6, react-window, react-virtualized-auto-sizer, lorem-impsum, Material-UI

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