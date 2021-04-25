const axios = require('axios'); // Promise based HTTP client for the browser and node.js

// Instead of using the Dark Sky API, which requires that you make an API key, I found another third-party API that doesn't!
// We're going to work with this API called "REST Countries"
// Take a look at the documentation here >> http://restcountries.eu/

// We'll be using their "Language" endpoint, which given an ISO 639-1 language code, will return all of the countries that list it as a designated language.

// Using `async`/`await`:
const fetchCountriesUsingAsyncAwait = async (languageCode) => {
  const apiEndpoint = `https://restcountries.eu/rest/v2/lang/${languageCode}`;

  console.log('INSIDE: About to make an HTTP request...');

  const response = await axios.get(apiEndpoint); // `axios.get` returns a Promise

  // When using `axios`, in order to access the body of the response, we will "dot" off of the `response` object to access the `data` property.
  const responseData = response.data;

  responseData.forEach((country) => {
    console.log('INSIDE: country.name >>', country.name);
  });
};

// Using Promise chaining (`.then` & `.catch`):
// const fetchCountriesUsingPromiseChaining = (languageCode) => {
//   const apiEndpoint = `https://restcountries.eu/rest/v2/lang/${languageCode}`

//   console.log('INSIDE: About to make an HTTP request...')

//   axios.get(apiEndpoint)
//   .then(response => {
//     const countries = response.data
//     countries.forEach(country => {
//       console.log('INSIDE: country.name >>', country.name)
//     })
//   })
//   .catch(err => {
//     console.error(err)
//   })
// }

console.log('OUTSIDE: About to run `fetchCountries`...');

const spanishSpeakingCountriesAA = fetchCountriesUsingAsyncAwait('es');

console.log(
  'OUTSIDE: Spanish speaking countries >>',
  spanishSpeakingCountriesAA
);

// const spanishSpeakingCountriesPC = fetchCountriesUsingPromiseChaining('es')

// console.log('OUTSIDE: Spanish speaking countries >>', spanishSpeakingCountriesPC)
