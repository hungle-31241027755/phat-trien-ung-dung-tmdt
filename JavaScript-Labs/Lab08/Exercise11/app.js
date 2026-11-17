const countries = [
  { name: 'Bahamas', iso: 'BS', capital: 'Nassau', continent: 'North America' },
  { name: 'Canada', iso: 'CA', capital: 'Ottawa', continent: 'North America' },
  { name: 'Germany', iso: 'DE', capital: 'Berlin', continent: 'Europe' },
  { name: 'Ghana', iso: 'GH', capital: 'Accra', continent: 'Africa' },
  { name: 'Hungary', iso: 'HU', capital: 'Budapest', continent: 'Europe' },
  { name: 'Italy', iso: 'IT', capital: 'Rome', continent: 'Europe' },
  { name: 'Spain', iso: 'ES', capital: 'Madrid', continent: 'Europe' },
  { name: 'United Kingdom', iso: 'GB', capital: 'London', continent: 'Europe' },
  { name: 'United States', iso: 'US', capital: 'Washington, D.C.', continent: 'North America' }
];
const output = document.getElementById('countries-output');
function renderCountries(query) {
  output.replaceChildren();
  countries.filter((country) => country.name.toLowerCase().includes(query.toLowerCase())).forEach((country) => {
    const card = document.createElement('article');
    card.className = 'demo-item';
    const flag = document.createElement('img');
    flag.src = '../flags/' + country['iso'] + '.png';
    flag.alt = country.name + ' flag';
    flag.width = 40;
    flag.height = 24;
    flag.style.cssText = 'object-fit:cover;border:1px solid #e1e4df;border-radius:4px;margin-bottom:8px';
    card.appendChild(flag);
    for (const propertyName in country) {
      const line = document.createElement('p');
      line.innerHTML = '<strong>' + propertyName + ':</strong> ' + country[propertyName];
      card.appendChild(line);
    }
    output.appendChild(card);
  });
}
renderCountries('');
document.getElementById('country-search').addEventListener('input', (event) => renderCountries(event.target.value));
