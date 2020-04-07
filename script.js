
$(document).ready(function() {

 let searchTerms = $("#searchBox").val();


 var APIKey = "302b9140c604266added2319618b8cb6";

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=phoenix,Burundi&appid=" + APIKey;
    

 $.ajax({
    url: queryURL,
    method: "GET"
  })
   .then(function(response) {


 // Log the queryURL
 console.log(queryURL);

 // Log the resulting object
 console.log(response);

 // Transfer content to HTML
 $(".general-information").html("<h1>" + response.name + " Weather Details</h1>");
 $(".detail1").text("Wind Speed: " + response.wind.speed);
 $(".detail2").text("Humidity: " + response.main.humidity);
 
 // Convert the temp to fahrenheit
 var tempF = (response.main.temp - 273.15) * 1.80 + 32;

 // add temp content to html
 $(".detail3").text("Temperature (K) " + response.main.temp);


 // Log the data in the console as well
 console.log("Wind Speed: " + response.wind.speed);
 console.log("Humidity: " + response.main.humidity);
 console.log("Temperature (F): " + tempF);





 
         }); 





});