import React from "react";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faCloud, faSun, faSnowflake } from '@fortawesome/free-solid-svg-icons';

const WeatherInfo = ({ weather, temp, desc }) => {
    const getWeatherIcon = () => {
        switch (weather) {
            case "Clear":
                return <WeatherIcon icon={faSun} color="text-yellow-500" />;
            case "Rain":
                return <WeatherIcon icon={faCloudRain} color="text-blue-500" />;
            case "Clouds":
                return <WeatherIcon icon={faCloud} color="text-gray-500" />;
            case "Snow":
                return <WeatherIcon icon={faSnowflake} color="text-blue-300" />;
            default:
                return <WeatherIcon icon={faCloudSun} color="text-gray-400" />;
        }
    };

    return (
        <div className="mt-6 text-center transition-opacity duration-500 animate-fadeIn">
            <div className="mb-4">{getWeatherIcon()}</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800"><b>Weather:</b> {weather}</h2>
            <p className="text-lg md:text-xl text-gray-700"><b>Temperature:</b> {temp} °C</p>
            <p className="text-base md:text-lg text-gray-600"><b>Description:</b> {desc}</p>
        </div>
    );
};

export default WeatherInfo;
