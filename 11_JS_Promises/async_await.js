//Using Promises:
const url = 'https://restcountries.com/v2/all';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

  //Using Async/Await:
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const countries = await response.json();
      console.log(countries);
    } catch (error) {
      console.error(error);
    }
  };
  
  console.log('===== async and await');
  fetchData();
  