$(document).ready(function () {
    var celeb = ["Beyonce", "Drake", "Lady Antebellum"];
  
    $("button").on("click", function () {
  
      var celebrities = $(this).attr("data-celeb");
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=KvEqWrylBme2rVug5Kv6Zpvg2fY4mr2l&q="+celebrities
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
  
        var results = response.data;
  
        for (var i = 0; i < results.length; i++) {
  
          var celebDiv = $("<div>");
  
          var celebImage = $("<img>")

          var p = $("<p>").text("Rating: " + results[i].rating);
  
          celebImage.attr("src", results[i].images.fixed_height.url);
  
          celebDiv.append(p);
          celebDiv.append(celebImage);
  
          $("#gifs-appear-here").prepend(celebDiv);
        }
      });
    });
  });
  