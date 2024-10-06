import { useState } from "react";
import axios from "axios";
import WeatherInput from "./WeatherInput";
import WeatherInfo from "./WeatherInfo";

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState("");
    const [desc, setDesc] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCityChange = (newCity) => {
        setCity(newCity);
    };

    const getWeather = async () => {
        if (!city) {
            setError("Please enter a city.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=420c491bd4d616aa32570dcdcc5f17c2&units=metric`);
            setWeather(response.data.weather[0].main);
            setDesc(response.data.weather[0].description);
            setTemp(response.data.main.temp);
        } catch (err) {
            setError("City not found. Please try again.");
            setWeather("");
            setDesc("");
            setTemp("");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[url('https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center min-h-screen flex items-center justify-center">
            <div className="bg-white bg-opacity-95 p-8 rounded-3xl shadow-2xl max-w-md w-full">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center text-blue-600">Weather Report</h1>
                <p className="text-base md:text-lg text-center mb-4 text-gray-700">Enter your city to get the current weather</p>
                <WeatherInput city={city} onCityChange={handleCityChange} onGetWeather={getWeather} loading={loading} />
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                {weather && <WeatherInfo weather={weather} temp={temp} desc={desc} />}
            </div>
        </div>
    );
}

export default WeatherApp;
