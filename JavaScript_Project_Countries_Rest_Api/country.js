const countryName = new URLSearchParams(window.location.search).get("name");

const themeChanger = document.querySelector(".theme-changer");

const flagImage = document.querySelector(".country-details img"),
  countryNameH1 = document.querySelector(".country-details h1"),
  nativeName = document.querySelector(".native-name"),
  population = document.querySelector(".population"),
  region = document.querySelector(".region"),
  subRegion = document.querySelector(".sub-region"),
  capital = document.querySelector(".capital"),
  topLevelDomain = document.querySelector(".top-level-domain"),
  currencies = document.querySelector(".currencies"),
  language = document.querySelector(".language"),
  borderCountries = document.querySelector(".border-countries"),
  countryDetails = document.querySelector(".country-details");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = country.flags.svg;
    countryNameH1.innerText = country.name.common;
    population.innerText = country.population.toLocaleString("en-IN");
    region.innerText = country.region;
    topLevelDomain.innerText = country.tld.join(", ");

    if (country.capital) {
      capital.innerText = country.capital?.[0];
    }

    if (country.subregion) {
      subRegion.innerText = country.subregion;
    }

    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common;
    } else {
      nativeName.innerText = country.name.common;
    }

    if (country.currencies) {
      currencies.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ");
    }

    if (country.languages) {
      language.innerText = Object.values(country.languages).join(", ");
    }

    if (country.borders) {
      country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            const borderCountryTag = document.createElement("a");
            borderCountryTag.innerText = borderCountry.name.common;
            borderCountryTag.href = `country.html?name=${borderCountry.name.common}`;
            borderCountries.append(borderCountryTag);
          });
      });
    }

    setTimeout(() => {
      countryDetails.classList.remove("skeleton-skin")
    }, 2000)

  });

themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeChanger.innerHTML = `
    <i class="fa-regular fa-sun"></i>&nbsp;&nbsp;Light Mode
    `;
  } else {
    themeChanger.innerHTML = `
    <i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
    `;
  }

  localStorage.setItem("theme", "dark");
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




//? my code try purpase
// data.forEach((country) => {
//     console.log(country)
//     const divElem = document.createElement("div")
//     divElem.classList.add("country-details");
//     divElem.innerHTML = `
//     <img src="${country.flags.svg}" alt="flags">
//     <div class="details-text-container">
//         <h1>${country.name.common}</h1>
//         <div class="details-text">
//             <p><b>Native Name: </b>${country.name.nativeName}</p>
//             <p><b>Population: </b>${country.population}</p>
//             <p><b>Region: </b>${country.region}</p>
//             <p><b>Sub Region: </b>${country.subregion}</p>
//             <p><b>Capital: </b>${country.capital}</p>
//             <p><b>Top Level Domain: </b>${country.tld[0]}</p>
//             <p><b>Currencies: </b>${country.currencies}</p>
//             <p><b>Language: </b>${country.languages}</p>
//         </div>
//         <div class="border-countries">
//             <p><b>Border Countries:</b>
//                 <a href="#">France</a>
//                 <a href="#">Germany</a>
//             </p>
//         </div>
//     </div>

//     `;
//     document.querySelector("main").append(divElem)
// });
