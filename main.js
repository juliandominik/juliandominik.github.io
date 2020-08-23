var myHeading = document.querySelector('h1');
var myPar = document.querySelector('p');
myHeading.textContent = 'Hallo Julia!';

var temperature = 26;

var var1;
$.getJSON("https://jsonplaceholder.typicode.com/todos/1",function(data){
   console.log(data.title);
   //myPar.textContent = data.title + 'Temperatur: ' + umrechnungtemperature(temperature);
   });


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Karlsruhe",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "81bfa7cea3msh3a936871961fd35p1fab28jsnddd4cea08d73"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	//var json = JSON.parse(response);
	myPar.textContent = response;
});


function umrechnungtemperature(number){
const result = number +5;
return result;
} 


