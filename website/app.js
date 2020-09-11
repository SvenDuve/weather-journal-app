/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



// set up variables for the api url and the api key

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const api_key = '<YOUR_API_KEY>&units=imperial';



// get Data from url
const getData = async (url) => {
    
    const res = await fetch(url);
    
    try {

        const data = res.json();
        return data;

    } catch (error) {

        console.log("error", error);

    }
};


// post data to url/ route using an object
const postData = async ( url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },

        body: JSON.stringify(data),

    });

    try {

        const newData = await response.json();
        return newData;

    } catch(error) {

        console.log("error", error);
    
    }
};





// add event listener for button with id 'generate'
const generate = document.getElementById('generate');
// generate.addEventListener('click', submit);
generate.addEventListener('click', validateForm);



function validateForm() {
    const x = document.getElementById('zip').value;

    if ((x != '') && (x > 9999 && x < 100000)) {
        submit();
    }
    else {
        window.alert("Please enter a valid US zip code.");
    }

};





// function to be called by the event listener for the button with id generate
function submit(){

    // pull in values form the user inputs on the webpage
    const text = document.getElementById('feelings').value;
    const zip = document.getElementById('zip').value;

    // construct the url for the weather data
    const url = baseUrl + zip + api_key;

    // get the weather data
    getData(url)

    // chained post request to route on the server
    .then(function(data){

        postData('/addData', {data, text:text});

        // update user interface with another async call
        updateUI();

    })

};


// async call for the user update
const updateUI = async () => {
    
    const request = await fetch('/addData');
    
    try{

        const userData = await request.json();

        // update the fields from the weather api call and the user input in the holder entry
        document.getElementById('date').innerHTML = userData.date;
        document.getElementById('temp').innerHTML = userData.temperature;
        document.getElementById('content').innerHTML = userData.userResponse;
        
    } catch(error){

        console.log("error", error);
    
    }
    
};