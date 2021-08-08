import React from 'react';

import './index.css';

function Temp({ data }) {
  return (
    <div className="temp">
      <span>{data.temp.toFixed(1)} °C</span>
      <span>{data.weather[0].description}</span>
    </div>
  );
}

export default Temp;
