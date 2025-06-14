function whereAmI(lat, lng) {
  const output = document.getElementById('output');
  output.textContent = 'Locating...\n';

  // 1. Reverse geocoding using geocode.xyz
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error(`Geocoding failed. Status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      const city = data.city;
      const country = data.country;
      output.textContent += `You are in ${city}, ${country}\n`;

      // 2. Fetch country data from RESTCountries
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country fetch failed. Status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      const country = data[0];
      const name = country.name.common;
      const region = country.region;
      const population = country.population;
      const languages = Object.values(country.languages).join(', ');
      const currencies = Object.values(country.currencies).map(c => c.name).join(', ');

      output.textContent += `
Country: ${name}
Region: ${region}
Population: ${population.toLocaleString()}
Languages: ${languages}
Currencies: ${currencies}
`;
    })
    .catch(err => {
      output.textContent += `❌ Error: ${err.message}`;
    });
}
