/*-----FRANKLIN----------*/
var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?id=4156210&APPID=baa961464eb122116277470a1effcbd3&units=imperial", true);

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
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
	document.getElementById("weather_icon").src = icon_path;
    
}

/*-------GREENVILLE---------*/
var weatherObjectG = new XMLHttpRequest();
weatherObjectG.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=29613,us&APPID=baa961464eb122116277470a1effcbd3&units=imperial", true);

weatherObjectG.send();

weatherObjectG.onload = function() {
    var weatherInfoG = JSON.parse(weatherObjectG.responseText);
    console.log(weatherInfoG);
    
    document.getElementById("currentTempG").innerHTML = weatherInfoG.main.temp;
    
    document.getElementById("highTempG").innerHTML = weatherInfoG.main.temp_max;
    
    document.getElementById("lowTempG").innerHTML = weatherInfoG.main.temp_min;
    
    document.getElementById("humidityG").innerHTML = weatherInfoG.main.humidity;
    
    document.getElementById("windG").innerHTML = weatherInfoG.wind.speed;
    
    var iconcodeG = weatherInfoG.weather["0"].icon;
    var icon_pathG = "//openweathermap.org/img/w/" + iconcodeG + ".png";
	document.getElementById("weather_iconG").src = icon_pathG;
    
}

/*----SPRINGFIELD----------*/
var weatherObjectS = new XMLHttpRequest();
weatherObjectS.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=62701,us&APPID=baa961464eb122116277470a1effcbd3&units=imperial", true);

weatherObjectS.send();

weatherObjectS.onload = function() {
    var weatherInfoS = JSON.parse(weatherObjectS.responseText);
    console.log(weatherInfoS);
    
    document.getElementById("currentTempS").innerHTML = weatherInfoS.main.temp;
    
    document.getElementById("highTempS").innerHTML = weatherInfoS.main.temp_max;
    
    document.getElementById("lowTempS").innerHTML = weatherInfoS.main.temp_min;
    
    document.getElementById("humidityS").innerHTML = weatherInfoS.main.humidity;
    
    document.getElementById("windS").innerHTML = weatherInfoS.wind.speed;
    
    var iconcodeS = weatherInfoS.weather["0"].icon;
    var icon_pathS = "//openweathermap.org/img/w/" + iconcodeS + ".png";
	document.getElementById("weather_iconS").src = icon_pathS;
    
}
