/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const url = 'api.openweathermap.org/data/2.5/weather?';
const api_key = '&appid=6c026e4de776701948d7cb5688b289c7';

// temp new york, for testing

const zip = 'zip=10110';



// add event listener for button with id generate
const generate = document.getElementById('generate');
generate.addEventListener('click', submitText);


// function to be called by the event listener for the button with id generate
function submitText(){

    const text = document.getElementById('feelings').value;

    console.log(text) 

    // // here we simple want to include data from another route
    // getFakeText('/someFakeText') // returns varable data, see decl. below

    // .then(function(data){
    //     console.log(data);
    //     // add them together in the parantheses and post to route /addSomeData
    //     postData('/addSomeData', {answer:42, data, text:text})
    // });

};









// const postData = async ( url = '', data = {}) => {

//     // await function läuft, programm läuft erst weiter nach erfolgreichem Fetch
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-type': 'application/json',
//         },
//         // daten werden in string gewandelt und in den body gepackt
//         body: JSON.stringify(data),
//     });

//     // antwort des servers, oder catch
//     try {
//         const newData = await response.json();
//         return newData
//     } catch(error) {
//         console.log("error", error);
//     }
// }
