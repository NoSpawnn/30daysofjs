const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

const searchBox = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchBox.addEventListener("keyup", displayMatches);
