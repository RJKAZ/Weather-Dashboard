$(document).ready(function (){
 
  var APIKey = "ba3203675e772a353cb83ab740e6c49a";
  var userCitySearches = [];

  userCitySearches = localStorage.getItem("userInputStorage");
  userCitySearches = JSON.parse(userCitySearches) || [];
  renderSearchHistory()
  var userInput;

 function displayWeatherInfo(cityName) {
   var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName + "&units=imperial&APPID=" + APIKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response){
      var cityLat = "lat=" + response.coord.lat;
      var cityLon = "lon=" + response.coord.lon;
      var uvIndexQueryURL = 
        "https://api.openweathermap.org/data/2.5/uvi?" +
        "&APPID=" + APIKey + "&" + cityLat + "&" + cityLon;
      $.ajax({
        url: uvIndexQueryURL,
        method: "GET"
      }).then(function (UVresponse){
        $("#uvIndex").text("UV Index: " + UVresponse.value);
      });

      var cityP = $("<p>").text(response.name + " (Today)");
      var temperatureP = $("<p>").text("Temperature: " + response.main.temp + " ℉");
      var humidityP = $("<p>").text("Humidity: " + response.main.humidity + "%");
      var windSpeedP = $("<p>").text("Wind Speed: " + response.wind.speed + " MPH");
      
      $("#cityName").empty();
      $("#temperature").empty();
      $("#humidity").empty();
      $("#windSpeed").empty();

      $("#cityName").append(cityP);
      $("#temperature").append(temperatureP);
      $("#humidity").append(humidityP);
      $("#windSpeed").append(windSpeedP);
    })
 }

 function renderSearchHistory() {
   for (var i = 0; i <userCitySearches.length; i++){  
   }
 }

 $(".btn-primary").on("click", function(event){
   event.preventDefault();
   userInput = $("#citySearch").val().trim();
   if ((userInput === null) || (userInput === "")) {
     return;
   } else {
     userCitySearches.push(userInput);
     localStorage.setItem("userInputStorage", JSON.stringify
     (userCitySearches));
     displayWeatherInfo(userInput);
   }
 });

 


  
});