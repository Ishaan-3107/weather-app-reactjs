import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState, useEffect } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(null);

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    useEffect(() => {
        getWeatherData("Delhi");
    }, []);

    const getWeatherData = async (city) => {
        try {
            let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            let response = await fetch(API_URL);
            let jsonRes = await response.json();
            
            const result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].main,
            };

            updateWeatherInfo(result);
        } catch (error) {
            console.error("Failed to fetch weather data", error);
        }
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif" }}>
            <h1>Weather App</h1>
            <h2 style={{ fontWeight: 400 }}>Search for the weather in your city</h2>
            <SearchBox updateInfo={updateWeatherInfo} />
            {weatherInfo ? <InfoBox info={weatherInfo} /> : <p>Loading...</p>}
        </div>
    );
}
