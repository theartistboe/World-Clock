function updateTime() {

let turlockElement = document.querySelector("#turlock");
let turlockDateElement = turlockElement.querySelector(".date");
let turlockTimeElement = turlockElement.querySelector(".time");
let turlockTime = moment().tz("America/Los_Angeles");

turlockDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
turlockTimeElement.innerHTML = turlockTime.format("h:mm:ss [<small>]A[</small>]");

let newyorkElement = document.querySelector("#newyork");
let newyorkDateElement = newyorkElement.querySelector(".date");
let newyorkTimeElement = newyorkElement.querySelector(".time");
let newyorkTime = moment().tz("America/New_York");

newyorkDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
newyorkTimeElement.innerHTML = newyorkTime.format("h:mm:ss [<small>]A[</small>]");

let greeceElement = document.querySelector("#greece");
let greeceDateElement = greeceElement.querySelector(".date");
let greeceTimeElement = greeceElement.querySelector(".time");
let greeceTime = moment().tz("Europe/Athens");

greeceDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
greeceTimeElement.innerHTML = greeceTime.format("h:mm:ss [<small>]A[</small>]");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = moment().format(`MMMM Do YYYY`);
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
       <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}<small> ${cityTime.format("A")}</small></div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format("A")}</small></div>
    </div>
    <a href="/">All Cities</a>         
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);