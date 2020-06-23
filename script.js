

$(document).ready(function () {


    let activeCases = document.querySelector("#active")

    $.ajax({
        url: "https://api.covid19api.com/summary",
        method: "GET"

    }).then(function (response) {
        console.log(response);

 
        $(".general-information").html();
        $(".detail1").html("<h2>" + "Active Cases: " + response.Global.TotalConfirmed);
        $(".detail2").html("<h3>" + "Total Death: " + response.Global.TotalDeaths);
        $(".detail3").html("<h3>" + "Total Recovered: " + response.Global.TotalRecovered);    

   
        

    }); 



    $("#searchbutton").on("click", function (event) {


       


         


          /* 
          $(".general-information").html("<h1>" + response.city.name + " Weather Details</h1>");
          $(".detail3").text("Temperature (K) " + response.list[0].main.temp);
          $(".detail1").text("Wind Speed: " + response.list[0].wind.speed);
          $(".detail2").text("Humidity: " + response.list[0].main.humidity); */

    });
});












