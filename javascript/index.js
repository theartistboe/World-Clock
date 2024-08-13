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

updateTime();
setInterval(updateTime, 1000);