var cityObject = new XMLHttpRequest();

cityObject.open("Get", "https://byui-cit230.github.io/weather/data/towndata.json", true);

cityObject.responseType = "json";

cityObject.send();

cityObject.onload = function () {
    var cityData = cityObject.response;
    console.log(cityData);
       
/*------FRANKLIN----------*/
document.getElementById("mottoF").innerHTML = cityData.towns[0].motto;

document.getElementById("yearF").innerHTML = cityData.towns[0].yearFounded;
document.getElementById("populF").innerHTML = cityData.towns[0].currentPopulation;
document.getElementById("rainfallF").innerHTML = cityData.towns[0].averageRainfall;

/*------GREENVILE----------*/

document.getElementById("mottoG").innerHTML = cityData.towns[1].motto;
document.getElementById("yearG").innerHTML = cityData.towns[1].yearFounded;
document.getElementById("populG").innerHTML = cityData.towns[1].currentPopulation;
document.getElementById("rainfallG").innerHTML = cityData.towns[1].averageRainfall;
   
/*--------SPRINGFIELD--------*/
    
document.getElementById("mottoS").innerHTML = cityData.towns[3].motto;
document.getElementById("yearS").innerHTML = cityData.towns[3].yearFounded;
document.getElementById("populS").innerHTML = cityData.towns[3].currentPopulation;
document.getElementById("rainfallS").innerHTML = cityData.towns[3].averageRainfall;
    
  }