# Basic Weather App

Simple weather web app using OpenWeatherMap API and Google Maps API

Check it out at: http://safe-brushlands-98089.herokuapp.com/

To set up and run on local:

1. Bring your new copy onto your computer from github 
  - `cd ~/Desktop`
  - `git clone https://github.com/bryanlou/WeatherApp.git`
  - `cd WeatherApp`
  - `ls`

2. Initialize it as a heroku project
  - `heroku login`
  - `heroku create`

3. Send the heroku project to heroku’s servers and view it online
  - `git push heroku master`
  - `heroku open`

4. Install the project’s dependencies and run the project on your local servers
  - `npm install`
  - `heroku local web`
  - check out http://localhost:5000
