
$(document).ready(function () {


    $("#searchbutton").on("click", function (event) {

        event.preventDefault();

        var APIKey = "302b9140c604266added2319618b8cb6";

        let searchTerms = $("#searchbox").val();

      

        let searchBtn = document.querySelector("#searchbutton");

       
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchTerms + "&appid=" + APIKey;  

        console.log(searchTerms)


        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

           console.log(response)

           $.ajax({
               url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + "&appid=" + APIKey,
               method: "GET"
           }).then(function(response2){

console.log(response2);
           })
           

              /*   // Transfer content to HTM
                $(".general-information").html("<h1>" + response.city.name + " Weather Details</h1>");
                $(".detail1").text("Wind Speed: " + response.current.wind_speed);
                $(".detail2").text("Humidity: " + response.current.humidity);

                // Convert the temp to fahrenheit
                var tempF = (response.main - 273.15) * 1.80 + 32;

                // added temp content to html
                $(".detail3").text("Temperature (K) " + response.current.temp);
 */

      






            });
    })
})



