import React from "react";

const WeatherInput = ({ city, onCityChange, onGetWeather, loading }) => {
    return (
        <>
            <input
                onChange={(e) => onCityChange(e.target.value)}
                value={city}
                type="text"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-4 shadow-sm"
                placeholder="Enter your city.."
            />
            <button
                onClick={onGetWeather}
                className={`bg-blue-600 text-white font-semibold p-3 rounded-lg w-full transition-colors duration-300 hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
            >
                {loading ? "Loading..." : "Get Weather"}
            </button>
        </>
    );
};

export default WeatherInput;
