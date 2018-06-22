var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=baa961464eb122116277470a1effcbd3&units=metric", true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
    
    document.getElementById("highTemp").innerHTML = weatherInfo.main.temp_max;
    
    document.getElementById("lowTemp").innerHTML = weatherInfo.main.temp_min;
    
    document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;
    
    document.getElementById("wind").innerHTML = weatherInfo.wind.speed;
    
    var iconcode = weatherInfo.weather["0"].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
	document.getElementById("weather_icon").src = icon_path;
    
}