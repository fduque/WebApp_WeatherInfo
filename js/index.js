//calling API weather data
var root = 'https://fcc-weather-api.glitch.me/api/current?';
var lat, lon;

function getLocal() 
	{
	  navigator.geolocation.getCurrentPosition(function(position) {
	  	var latAPI = position.coords.latitude;
		var lonAPI = position.coords.longitude;
		  
		  getWeatherData(latAPI,lonAPI);
	  });
	}
function getWeatherData (lat, lon) {
		$.ajax({
		  url: root + "lat=" + lat + "&lon=" + lon, 
		  method: 'GET'
		}).then(function(data) {
			//"coord":{ "lon":159, "lat":35 },
				  $("#weatherDataCoordLon").html(data.coord.lon);
				  $("#weatherDataCoordLat").html(data.coord.lat);
			// "weather":[ { "id":500, "main":"Rain","description":"light rain","icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ],
					//a informação acima esta dentro de um array, entao teremos que acessar cada posicao
					$("#weatherWId").html(data.weather[0].id);
					$("#weatherWMain").html(data.weather[0].main);
					$("#weatherWDescription").html(data.weather[0].description);
					$('#weatherWIcon').prepend('<img  src="'+data.weather[0].icon+'" />') 
			//"base":"stations",
					$("#weatherDataBaseStations").html(data.base);
			//"main":{ "temp":22.59, "pressure":1027.45, "humidity":100, "temp_min":22.59, "temp_max":22.59, "sea_level":1027.47, "grnd_level":1027.45 },
					$("#weatherDataMainTemp").html("</br>"+ data.main.temp + '&deg' + "C");
					$("#weatherDataMainPressure").html("</br>Pressure: "+data.main.pressure);
					$("#weatherDataMainHumidity").html("</br>Humidity: "+data.main.humidity);
					$("#weatherDataMainTemp_min").html("</br>Min Temperature: "+data.main.temp_min);
					$("#weatherDataMainTemp_max").html("</br>Max Temperature: "+data.main.temp_max);
					$("#weatherDataMainVisi").html("</br>Visibility: "+data.main.visibility);
			// "wind":{ "speed":8.12, "deg":246.503 },
					$("#weatherDataWindSpeed").html("</br>Wind Speed: "+data.wind.speed);
					$("#weatherDataWindDeg").html("</br>Wind Deg: "+data.wind.deg);
			// "rain":{ "3h":0.45 },
					//deprecated
			//"clouds":{ "all":92 },
					$("#weatherDataClouds").html("</br>Clouds: "+data.clouds.all);
			 //"dt":1499521932,
						 var datetoday = data.dt;
					   var today = new Date(datetoday*1000);
			 		$("#weatherDataDt").html("</br>Updated: "+today);
			 // "sys":{ "message":0.0034, "sunrise":1499451436,"sunset":1499503246 },
	           		$("#weatherDataSysMes").html("</br>SysMessage: "+data.sys.message + " No Worries! Sys OK!");
					   var urise = data.sys.sunrise;
					   var risetime = new Date(urise*1000);
					   $("#weatherDataSysSunr").html("</br>Sunrise: "+risetime);
					   var uset = data.sys.sunset;
					   var sunsentime = new Date(uset*1000);
	           		$("#weatherDataSysSuns").html("</br>Sunset: "+sunsentime);
	         //   "id":0,
	         		//not important
	         //     "name":"",
	         		//not important
	         //      "cod":200 
	         		//not important
});
}
$(document).ready(function () {
	 getLocal();
});