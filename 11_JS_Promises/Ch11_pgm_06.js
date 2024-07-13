const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Print out all the cat names in to catNames variable.


fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    const catNames = data.map(cat => cat.name); // Extracting just the name of each cat
    console.log(catNames); // Output the array of cat names
  })
  .catch(error => console.error('Error fetching cat data:', error));
