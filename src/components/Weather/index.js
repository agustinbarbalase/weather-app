import React from 'react';
import './index.css';

import Current from 'components/Current';
import Daily from 'components/Daily';
import Hourly from 'components/Hourly';

import { WeatherContext } from 'context/WeatherContext';

function Weather() {
  return (
    <div className="weather">
      <WeatherContext>
        <Current />
        <Hourly />
        <Daily />
      </WeatherContext>
    </div>
  );
}

export default Weather;
