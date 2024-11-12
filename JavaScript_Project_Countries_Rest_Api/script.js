const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const searchInput = document.querySelector(".search-container input");

const themeChanger = document.querySelector(".theme-changer");

let allCountriesData;

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        renderCountries(data);
        allCountriesData = data;
    });

filterByRegion.addEventListener("change", (e) => {
    const countryByregion = e.target.value;
    fetch(`https://restcountries.com/v3.1/region/${countryByregion}`)
        .then((res) => res.json())
        .then(renderCountries);
});

function renderCountries(data) {
    countriesContainer.innerHTML = "";
    data.forEach((country) => {
        const countryCard = document.createElement("a");
        countryCard.href = `./country.html?name=${country.name.common}`;
        countryCard.classList.add("country-card");
        countryCard.classList.add("skeleton");
        countryCard.innerHTML = `
            <div class="cover-img">
                <img src="${country.flags.svg}" alt="flag">
            </div>
            <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
            </div>
        `;
        countriesContainer.append(countryCard);

        const countryCardElem = document.querySelectorAll(".country-card");

        setTimeout(() => {
            countryCardElem.forEach((countrySkeleton) => {
                countrySkeleton.classList.remove("skeleton");
            });
        }, 2000);
    });
}

searchInput.addEventListener("input", (e) => {
    const filterCountries = allCountriesData.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderCountries(filterCountries);
});

themeChanger.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeChanger.innerHTML = `
    <i class="fa-regular fa-sun"></i>&nbsp;&nbsp;Light Mode
    `;
        localStorage.setItem("theme", "dark");
    } else {
        themeChanger.innerHTML = `
    <i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
    `;
        localStorage.removeItem("theme");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == "dark") {
        document.body.classList.add("dark");
        themeChanger.innerHTML = `
    <i class="fa-regular fa-sun"></i>&nbsp;&nbsp;Light Mode
    `;
    } else {
        document.body.classList.remove("dark");
        themeChanger.innerHTML = `
            <i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
        `;
    }
});

//! Number format
// new Intl.NumberFormat("en-IN").format(country.population)

//! code for query string get data
// new URLSearchParams(window.location.search).get("name")