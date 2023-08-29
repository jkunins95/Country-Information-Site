const API = "http://localhost:3000/countries";
const countryMenu = document.getElementById("country-menu");

function el(elementName) {
    return document.getElementById(elementName)
};

el("new-country").addEventListener("submit", createNewCountry);

document.addEventListener("DOMContentLoaded", () => {
    fetch(API)
    .then(resp => resp.json())
    .then(renderCountries)
});

function renderCountries(countries) {
    console.log(countries)
    countries.forEach(renderCountry)
}

function renderCountry(country) {
    const countryImage = document.createElement("img")
    countryImage.src = country.img

    countryMenu.append(countryImage)

    countryImage.addEventListener("click", (e) => renderDetails(country))
}

function renderDetails(country) {
    console.log(country.img)
    const detailImage = el("detail-image");
    const countryName = el("country-name");
    const mottoName = el("motto-name");
    const capitalDisplay = el("capital-display");
    const factDisplay = el("historical-fact-display");

    detailImage.src = country.map;
    detailImage.alt = country.name;

    countryName.textContent = country.name;
    mottoName.textContent = country.motto;
    capitalDisplay.textContent = country.capital;
    factDisplay.textContent = country.fact;
}

function createNewCountry(e) {
    e.preventDefault();

    const newCountry = {
        name: e.target.name.value,
        capital: e.target.capital.value,
        motto: e.target.motto.value,
        img: e.target.getAttribute('src'),
        map: e.target.map.value,
        fact: e.target.fact.value
    }
    console.log(newCountry);
    
    // fetch(API, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify({newCountry})
    // })
    // .then(resp => resp.json())
    // .then(console.log(data))
};

