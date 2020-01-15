$(document).ready(function (){
  var APIKey = "ba3203675e772a353cb83ab740e6c49a";
  var userCitySearches = [];
  userCitySearches = localStorage.getItem("userInputStorage");
  userCitySearches = JSON.parse(userCitySearches) || [];
  renderSearchHistory()
  var userInput;





  
})