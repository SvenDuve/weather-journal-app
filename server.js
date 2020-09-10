// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require('express');

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000;
const server = app.listen(port, () => {console.log(`running on localhost: ${port}`)});


// adding Routes

// Route to send data to the app
app.get('/addData', getData);

function getData(req, res) {

    res.send(projectData);

}

// Route to receive data from the app and store in projectData
app.post('/addData', postData);

function postData(req, res) {

    // create keys for the data to be stored
    projectData.temperature = req.body.data.main.temp;
    // Here I used the exact date and time from the weather API
    projectData.date = Date(req.body.dt);
    projectData.userResponse = req.body.text;

}