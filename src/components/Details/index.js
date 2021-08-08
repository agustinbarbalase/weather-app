import React from 'react';

import './index.css';

function Details({ data }) {
  return (
    <div className="details">
      <div className="details-data">
        <span>Feels Like</span>
        <span>{data.feels_like.toFixed(1)} °C</span>
      </div>
      <div className="details-data">
        <span>Pressure</span>
        <span>{data.pressure} hPa</span>
      </div>
      <div className="details-data">
        <span>Humidity</span>
        <span>{data.humidity} %</span>
      </div>
      <div className="details-data">
        <span>UV Index</span>
        <span>{data.uvi}</span>
      </div>
      <div className="details-data">
        <span>Wind</span>
        <span>{data.wind_speed} m/s</span>
      </div>
      <div className="details-data">
        <span>Visibility</span>
        <span>{data.visibility.toFixed(1) / 1000} km</span>
      </div>
    </div>
  );
}

export default Details;
