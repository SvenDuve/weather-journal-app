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

app.get('/addData', getData);

function getData(req, res) {
    console.log('I am working, what do you want')
    res.send(projectData);
    // res.send(data);
}

app.post('/addData', postData);

function postData(req, res) {

    console.log(req.body);
    projectData.push(req.body);

    // newData.temperature = req.body.temperature;
    // newData.date = req.body.date;
    // newData.userResponse = req.body.userResponse;

    // projectData.push(newData);

}