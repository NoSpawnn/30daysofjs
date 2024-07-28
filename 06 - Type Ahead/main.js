const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

/**
 * @typedef City
 * @type {object}
 * @property {string} city - City Name
 * @property {string} growth_from_2000_to_2013 - City Name
 * @property {float} latitude - Latitude co-ordinates
 * @property {float} longitude - Longitude co-ordinates
 * @property {string} population
 * @property {string} state
 * */

/** @type {Array<City>} */
const cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

/**
 * @param {number} x
 * @returns {string} formatted number
 */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * @param {string} word
 * @param {Array<City>} cities
 * @returns {Array<City>} matching cities or states
 */
function search(word, cities) {
  const rgx = new RegExp(word, "gi");
  return cities.filter(
    (entry) => entry.city.match(rgx) || entry.state.match(rgx)
  );
}

function displayMatches() {
  const results = search(this.value, cities);
  const html = results
    .map((place) => {
      const rgx = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        rgx,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        rgx,
        `<span class="hl">${this.value}</span>`
      );

      return `
    <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join("");

  suggestions.innerHTML = html;
}

/** @type {HTMLInputElement} */
const searchBox = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchBox.addEventListener("keyup", displayMatches);
