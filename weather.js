const apikey = "c356f02fdd470ffd2d98a64ac6e539b0";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric";

const apiUrl2 = "https://restcountries.com/v3.1/capital/";

var search = document.getElementById("Search");
var ipt = document.getElementById("ipt");
var img = document.getElementById("ih");
var country = document.getElementById("country");
var region = document.getElementById("region");
var img2 = document.getElementById("img2");


// var language = document.getElementById("language");





search.addEventListener("click", () => {
    
    checkWeather(ipt.value);


});






async function checkWeather(city) {
  
    const response = await fetch(apiUrl + '&q=' + city + `&appid=${apikey}`);
  var data = await response.json();
  
const response2 = await fetch(apiUrl2+city);
  var data2 = await response2.json();
  console.log(data2);


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
   if (data.weather[0].main == "Haze") {
     img.src = "./images/haze.png";
  }
  document.getElementById("img2").src = data2[0].flags.png;
  
 document.getElementById("country").innerHTML ="Country :" + data2[0].name.common;

    
  document.getElementById("region").innerHTML ="Region :" + data2[0].region;


  var populationInMillion = parseFloat(data2[0].population) / 1000000;
 console.log(populationInMillion)

    document.getElementById("language").innerHTML ="Population:"+  populationInMillion;
  
    
    //  document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    // document.getElementById("wind").innerHTML = data.wind.speed + "km/h";









}
