
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
                }).then(function (response2) {

                    console.log(response2);

                })


                //day 1 
                $(".general-information").html("<h1>" + response.city.name + " Weather Details</h1>");
                $(".detail3").text("Temperature (K) " + response.list[0].main.temp);
                $(".detail1").text("Wind Speed: " + response.list[0].wind.speed);
                $(".detail2").text("Humidity: " + response.list[0].main.humidity);
              

                // day 2 
                $(".detail4").text("Wind Speed: " + response.list[1].wind.speed);
                $(".detail5").text("Humidity: " + response.list[1].main.humidity);
                $(".detail6").text("Temperature (K) " + response.list[1].main.temp);

                //day 3
                $(".detail7").text("Wind Speed: " + response.list[2].wind.speed);
                $(".detail8").text("Humidity: " + response.list[2].main.humidity);
                $(".detail9").text("Temperature (K) " + response.list[2].main.temp);


                //day 4
                $(".detail10").text("Wind Speed: " + response.list[3].wind.speed);
                $(".detail11").text("Humidity: " + response.list[3].main.humidity);
                $(".detail12").text("Temperature (K) " + response.list[3].main.temp);


                //day 5

                $(".detail13").text("Wind Speed: " + response.list[4].wind.speed);
                $(".detail14").text("Humidity: " + response.list[4].main.humidity);
                $(".detail15").text("Temperature (K) " + response.list[4].main.temp);




            });
    })
})



