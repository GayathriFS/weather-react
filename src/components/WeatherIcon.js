import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherIcon = ({ icon, color }) => {
    return <FontAwesomeIcon icon={icon} className={`${color} text-4xl md:text-5xl`} />;
};

export default WeatherIcon;
