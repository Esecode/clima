let weatherDays = {};

link =
  "https://api.openweathermap.org/data/2.5/weather?id=5095808&appid=73f99842d33159794617caba708cf044";
const request = new XMLHttpRequest();
request.open("GET", link, true);
request.onload = function () {
  const obj = JSON.parse(this.response);

  weatherDays.currentDay = {
    day: getNameDay(),
    description: obj.weather[0].description,
    temp_min: Math.floor(obj.main.temp_min - 273.15),
    temp_max: Math.floor(obj.main.temp_max - 273.15),
    temp: Math.floor(obj.main.temp - 273.15),
  };
  document.getElementById("description").innerHTML = obj.weather[0].description;
  document.getElementById("location").innerHTML = obj.name;
  document.getElementById("temp").innerHTML = Math.floor(
    obj.main.temp - 273.15
  );
  document.getElementById("img-temp").src =
    "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
};

request.send();

link =
  "http://api.openweathermap.org/data/2.5/forecast?q=Bogota,us&mode=json&appid=73f99842d33159794617caba708cf044";
const request1 = new XMLHttpRequest();
request1.open("GET", link, true);
request1.onload = function () {
  const obj = JSON.parse(this.response);
  weatherDays.day2 = {
    day: getNameDay(obj.list[4].dt_txt),
    description: obj.list[4].weather[0].description,
    temp_min: Math.floor(obj.list[4].main.temp_min - 273.15),
    temp_max: Math.floor(obj.list[4].main.temp_max - 273.15),
  };
  document.getElementById("day1").innerHTML = getNameDay(obj.list[4].dt_txt);
  document.getElementById("description1").innerHTML =
    obj.list[4].weather[0].description;
  document.getElementById("img1").src =
    "http://openweathermap.org/img/w/" + obj.list[4].weather[0].icon + ".png";
  document.getElementById("temp1-min").innerHTML = Math.floor(
    obj.list[4].main.temp_min - 273.15
  );
  document.getElementById("temp1-max").innerHTML = Math.floor(
    obj.list[4].main.temp_max - 273.15
  );

  weatherDays.day3 = {
    day: getNameDay(obj.list[12].dt_txt),
    description: obj.list[12].weather[0].description,
    temp_min: Math.floor(obj.list[12].main.temp_min - 273.15),
    temp_max: Math.floor(obj.list[12].main.temp_max - 273.15),
  };
  document.getElementById("day2").innerHTML = getNameDay(obj.list[12].dt_txt);
  document.getElementById("description2").innerHTML =
    obj.list[12].weather[0].description;
  document.getElementById("img2").src =
    "http://openweathermap.org/img/w/" + obj.list[12].weather[0].icon + ".png";
  document.getElementById("temp2-min").innerHTML = Math.floor(
    obj.list[12].main.temp_min - 273.15
  );
  document.getElementById("temp2-max").innerHTML = Math.floor(
    obj.list[12].main.temp_max - 273.15
  );

  weatherDays.day4 = {
    day: getNameDay(obj.list[20].dt_txt),
    description: obj.list[20].weather[0].description,
    temp_min: Math.floor(obj.list[20].main.temp_min - 273.15),
    temp_max: Math.floor(obj.list[20].main.temp_max - 273.15),
  };
  document.getElementById("day3").innerHTML = getNameDay(obj.list[20].dt_txt);
  document.getElementById("description3").innerHTML =
    obj.list[20].weather[0].description;
  document.getElementById("img3").src =
    "http://openweathermap.org/img/w/" + obj.list[20].weather[0].icon + ".png";
  document.getElementById("temp3-min").innerHTML = Math.floor(
    obj.list[20].main.temp_min - 273.15
  );
  document.getElementById("temp3-max").innerHTML = Math.floor(
    obj.list[20].main.temp_max - 273.15
  );
};

request1.send();

function getNameDay(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = date ? new Date(date) : new Date();

  return days[d.getDay()];
}

link =
  "https://api.openweathermap.org/data/2.5/weather?id=2988506&appid=73f99842d33159794617caba708cf044";
const request2 = new XMLHttpRequest();
request2.open("GET", link, true);
request2.onload = function () {
  const obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById("paris").innerHTML = obj.name;
  document.getElementById("temp-france").innerHTML = Math.floor(
    obj.main.temp - 273.15
  );
  document.getElementById("img-france").src =
    "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
};
request2.send();

link =
  "https://api.openweathermap.org/data/2.5/weather?id=2996944&appid=73f99842d33159794617caba708cf044";
const request3 = new XMLHttpRequest();
request3.open("GET", link, true);
request3.onload = function () {
  const obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById("lyon").innerHTML = obj.name;
  document.getElementById("temp-lyon").innerHTML = Math.floor(
    obj.main.temp - 273.15
  );
  document.getElementById("img-lyon").src =
    "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
};
request3.send();
