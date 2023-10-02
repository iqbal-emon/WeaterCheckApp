const apikey = "c356f02fdd470ffd2d98a64ac6e539b0";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric";


var search = document.getElementById("Search");
var ipt = document.getElementById("ipt");
var img = document.getElementById("ih");

search.addEventListener("click", () => {
    
    checkWeather(ipt.value);


});

async function checkWeather(city) {
  
    const response = await fetch(apiUrl + '&q=' + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.getElementById("degree").innerHTML = Math.round(data.main.temp) + "°C";
    
    document.getElementById("name").innerHTML = data.name;
    
     document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";

    

    
    if (data.weather[0].main == "Clouds") {
      img.src = "./images/clouds.png";
    }
    if (data.weather[0].main == "Clear") {
      img.src = "./images/clear.png";
    }
    if (data.weather[0].main == "Drizzle") {
      img.src = "./images/drizzle.png";
    }
    if (data.weather[0].main == "Snow") {
      img.src = "./images/snow.png";
    }
    if (data.weather[0].main == "Mist") {
      img.src = "./images/mist.png";
    }



}
