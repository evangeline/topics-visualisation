# topics-visualisation

## Introduction

This is a simple full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend which allows an user to retrieve audience sizes for different topics and visualise them on a simple dashboard. Client side code is written in React and the backend API is written using Express.
This application is created from the [boilerplate](https://github.com/crsandeep/simple-react-full-stack) here.

Specifically the requirements are:

- A nodejs backend to expose the data on publicly accessible endpoints
- A react dashboard to visualize audience sizes & overlaps as described in the task brief
- No preference on how/where data is stored
- No need to worry about adding new topics & data refresh

You can find more details in brief.pdf

### Development mode (Recommended)

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode (Still buggy!)

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick Start

```bash
# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

# Build for production
yarn build (or npm run build)

# Start production server
yarn start (or npm start)
```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.

### Thoughts on the Project

1. Deciding when to render a specific view on the app:

    - Initially, the app makes an API call to the backend for data when a product topic is selected on the UI and then renders the response on the table and chart. It works,
    but it was not possible to navigate forward or backwards, nor could the user save an unique URL for the data, which didn't feel user-friendly.
    - I then looked into front end routing and picked React Router (given that it's the most popular and well maintained)
    to implement some routes. Each time the user selects a product topic, a specific URL would be pushed onto the browser. 
    On mounting, the app also checks whether a path '/product/:topic' exists, and renders the data accordingly. The problem
    here is that as the app grows, manually checking for every type of URL isn't very scaleable. It's hard to anticipate
    how to user may navigate through the app, and ideally I wouldn't want to be checking the URL at across multiple parts of the application.
    - The final implementation was setting up a history listener when the app mounts. Regardless of how the user navigates to / through the app,
    the listener would capture the change in URL and the routing would then set the correct view.
    
2. Picking a suitable library to render the table and chart 

    - Picking a library means I could build the app a lot faster + include a lot more features that's been heavily tested in each component, 
    but it also reduced the control I have over how my components looked given that I was using Bootstrap. If I had more time I would probably
    build the table from scratch, as there's a lot of potential to add features that link the table and the graph together. Currently they feel like
    two independent components, and my guess would be interlinking them makes the data a lot more readable. 
    (e.g. if the user filters for a topic on the table, the graph also filters etc)
  
3. Deciding on a chart format

    - This was probably one of the hardest parts of the challenge. The issue here is we want to visualise the data on 3 dimensions and there are 300 categories (and possibly more in production).
    I looked into bubble charts and polar area charts, and while these are great to visualise data on multiple dimensions, they don't handle lots of data points well. 
    - I guessed that the Product Interest variable was probably the most important piece of information to the user, and I wanted to render this data point in the most striking manner. 
    The problem here is that the Product Interest data points don't range greatly, which meant that the bubbles on my chart look really similar (which defeats of the point of visualising this variable)
    - I provided a zoom functionality on the chart for the user to better parse the data + using color and a non-linear scale to point out data that might be interesting.
    - I probably would look into more sophisticated charting libraries to see if the data displayed in a better way given more time, but I settled on Chartjs 
    given its looks + ease of implementation. 

### Improvements

1. Setting up integration tests

    - The backend was quite simple so I didn't focus on writing unit test in this project. I did realise the frontend was getting more complicated, and it was
    becoming more time consuming to test different parts of UI. I wanted to set up Ghostinspector to do cross-browser UI testing, but I ran out of time to get this hosted properly on Heroku.

2. As mentioned above, integrating the table and chart more to increase the ease of data interpretation. 

    - It feels like the user has to do a lot of work to figure out what's relevant + cross reference between the chart and the table. 

3. Error messages for users. 

    - If any requests fails, it currently sends back a 400 or 500 with whatever error that's been caught in a single try catch. 
    I would break the try catches down further, send user-readable error messages and build a component that renders the error message.
