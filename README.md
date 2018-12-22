# topics-visualisation

## Introduction

This is a simple full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend which allows an user to retrieve audience sizes for different topics and visualise them on a simple dashboard. Client side code is written in React and the backend API is written using Express.
This application is created from the [boilerplate](https://github.com/crsandeep/simple-react-full-stack) here.

Specifically the requirements are:

- A nodejs backend to expose the data on publicly accessible endpoints
- A react dashboard to visualize audience sizes & overlaps as described in the task brief
- No preference on how/where data is stored
- No need to worry about adding new topics & data refresh

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

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

### Improvements
