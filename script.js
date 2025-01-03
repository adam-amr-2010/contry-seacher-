let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');
let result = document.getElementById('result');

searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL).then((response) => 
        response.json()
    ).then((data) => {
        result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
                <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
                <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)[0]].name} - ${Object.keys(data[0].currencies)[0]}</span>
                </div>
                <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Language:</h4>
                    <span>${Object.values(data[0].languages).join(", ")}</span>
                </div>
            </div>
        `;
    }).catch(() => {
        if (countryName.length === 0) {
            result.innerHTML = `<h2>Enter a country name to search</h2>`;
        } else {
            result.innerHTML = `<h2>Country not found. Please enter a valid country name.</h2>`;
        }
    });
});
