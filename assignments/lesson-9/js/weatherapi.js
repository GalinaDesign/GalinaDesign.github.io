var weatherRequest = new XMLHttpRequest();

/*var apiURL = "http://
api.openweathermap.org/data/2.5/weather?id=4156210&APPID=baa961464eb122116277470a1effcbd3=imperial";*/

weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=baa961464eb122116277470a1effcbd3&units=imperial', true);

weatherRequest.send();

weatherRequest.onload =  function () {
  var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

 document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}

















