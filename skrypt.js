const apiKey = "21b34f629666b35cd9a903a2c0ac558e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=poznan";

async function checkWeather()
{
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();