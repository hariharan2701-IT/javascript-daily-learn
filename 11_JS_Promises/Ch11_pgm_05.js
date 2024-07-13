const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
.then(response => response.json())
.then(data => {
  // Iterate through each country object in the data array
  data.forEach(country => {
    const { name, capital, languages, population, area } = country;

    // Log the required information for each country
    console.log('Country:', name);
    console.log('Capital:', capital);
    console.log('Languages:', languages.map(lang => lang.name).join(', '));
    console.log('Population:', population);
    console.log('Area:', area);
    console.log('----------------------');
  });
})
.catch(error => console.error('Error fetching data:', error));
