<!DOCTYPE html>
<html>

<head>
  <title>Weather App</title>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />

  <link rel="stylesheet" type="text/css" href="stylesheets/main.css"/>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css">

  <script>var apiKey = '<%= process.env.API_KEY %>';</script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRdgYGiIUL5yZRpvWfPADrzJV5Ffu9NTQ&callback=initMap">
  </script>

  <script src="/js/main.js"></script>
</head>

<body>
  <div class="content">
    <div class="header">
      <svg class="svgIcon-use" width="50" height="50" viewBox="0 0 25 25"><path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path></svg>
      <input id="search-box" class="search" type="text" placeholder="Search by name or zip code" />
      <button id="search-button" type="button" onclick="searchWeather()">Search</button>
    </div>
    <div class="error-message"></div>
    <div class="container">
      <div class="name">
        <span class="city"></span>, <span class="country"></span>
        <span class="ampm"></span><span class="time"></span>
      </div>
      <div class="text-inner">
        <div class="left">
          <i class="icon"></i>
          <span class="temp temp-display"></span><span class="unit">°F</span>
        </div>
        <div class="right">
          <div class="description"></div>
          <div class="humidity"></div>
          <div class="wind"></div>
        </div>
        <div class="forecast">
          <div class="day-wrapper">
            <div class="day day1"></div>
            <div class="max dayOneMax"></div>
            <div class="min dayOneMin"></div>
          </div>
          <div class="day-wrapper">
            <div class="day day2"></div>
            <div class="max dayTwoMax"></div>
            <div class="min dayTwoMin"></div>
          </div>
          <div class="day-wrapper">
            <div class="day day3"></div>
            <div class="max dayThreeMax"></div>
            <div class="min dayThreeMin"></div>
          </div>
          <div class="day-wrapper">
            <div class="day day4"></div>
            <div class="max dayFourMax"></div>
            <div class="min dayFourMin"></div>
          </div>
          <div class="day-wrapper">
            <div class="day day5"></div>
            <div class="max dayFiveMax"></div>
            <div class="min dayFiveMin"></div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div id="map"></div>

</body>
</html>
