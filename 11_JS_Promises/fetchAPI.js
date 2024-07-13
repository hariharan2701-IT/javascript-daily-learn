// The Fetch API provides an interface for fetching resources (including across the network). 
// It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more 
// powerful and flexible feature set. In this challenge we will use fetch to request url and APIS. 
// In addition to that let us see demonstrate use case of promises in accessing network resources 
// using the fetch API.
/*
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
  */

  const url = 'https://restcountries.com/v2/all'; // URL of the countries API
fetch(url) // Fetching data from the API
  .then(response => response.json()) // Converting response to JSON format
  .then(data => {
    // Handling the JSON data received
    console.log(data); // Logging the data to the console
  })
  .catch(error => console.error(error)); // Handling errors if any occur during fetch or JSON conversion
