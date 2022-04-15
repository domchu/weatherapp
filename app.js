let loader = document.querySelector(".load");
let resultDiv = document.querySelector(".result");
let cityName = document.querySelector(".cityname");
let getWeatherBtn = document.querySelector(".getbtn");
let apiKey = "9b2b17c141011453cde21df077126a89";

async function getWeather() {
  loader.style.display = "block";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`;
  let data = fetch(api);
  let result = await (await data).json();
  console.log(result);
  loader.style.display = "none";
  resultDiv.style.display = "block";
  let temp = result.main.temp;
  temp = Math.floor(temp - 273.15);
  let name = result.name;
  let weather = result.main.temp;
  let icon = result.weather[0].icon;
  let weatherDescription = result.weather[0].description;

  let cityDetail = document.querySelector(".citydetail");
  let desc = document.querySelector(".desc");
  let tempdata = document.querySelector(".temp");
  let wIcon = document.querySelector(".icon-img");
  let imgLink = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  cityDetail.textContent = name;
  desc.textContent = weatherDescription;
  tempdata.textContent = temp;
  wIcon.src = imgLink;
}
getWeatherBtn.addEventListener("click", getWeather);
