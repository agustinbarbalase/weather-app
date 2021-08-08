import React, { useEffect, useState } from 'react';

import getWeather from 'services/getWeather';

import useLocation from 'hooks/useLocation';

const Context = React.createContext({});

export function WeatherContext({ children }) {
  const [weather, setWeather] = useState(),
    { location } = useLocation();

  useEffect(() => {
    if(location) {
      getWeather(location.latitude, location.longitude)
        .then((data) => {
          setWeather(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [location]);

  return <Context.Provider value={{ weather }}>{children}</Context.Provider>;
}

export default Context;
