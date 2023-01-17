var search = document.querySelector(".search");
var body = search.querySelector("body");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var cloud = document.querySelector(".cloud span");
async function getWeatherApi(input) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    const res = await fetch(url);
    const data = await res.json();
    changeWeatherUi(data);
}
getWeatherApi('ha noi')
search.addEventListener("keydown", function(e) {
    if(e.key === 'Enter') {
        let searchValue = search.value.trim();
        getWeatherApi(searchValue)
    }
})
function changeWeatherUi(data) {
    const cityValue = data.name;
    if(cityValue === undefined) {
        getWeatherApi('ha noi')
        alert('khong tim thay');
        search.value = '';
    }
    city.innerText = cityValue ;
    country.innerText = data.sys.country;
    time.innerText = new Date().toLocaleString('Vi');
    const temperatureValue = Math.round(data.main.temp);
    value.innerText = temperatureValue;
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
    visibility.innerText = data.visibility + ' m';
    wind.innerText = data.wind.speed + ' m/s';
    cloud.innerText = data.clouds.all + ' %';
    temperatureValue >= 25 
    ? (document.body.className = 'hot')
    : (document.body.className = 'cold');
}