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
};

function renderCountry(country) {
    const countryImage = document.createElement("img")
    countryImage.src = country.img

    countryMenu.append(countryImage)

    countryImage.addEventListener("click", (e) => renderDetails(country))
};

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
};

function createNewCountry(e) {
    e.preventDefault();

    const countryName = e.target.name.value
    const countryCapital = e.target.capital.value
    const countryMotto = e.target.motto.value
    const countryImg = e.target.image.value
    const countryMap = e.target.map.value
    const countryFact = e.target.fact.value

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: countryName,
            capital: countryCapital,
            motto: countryMotto,
            img: countryImg,
            map: countryMap,
            fact: countryFact
        })
    })
    .then(resp => resp.json())
    .then(newCountry => console.log(newCountry))
};
