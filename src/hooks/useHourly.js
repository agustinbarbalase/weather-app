import { useContext, useEffect, useState } from 'react';
import Context from 'context/WeatherContext';

const useHourly = () => {
  const { weather } = useContext(Context),
    [ hourly, setHourly ] = useState();

  useEffect(() => {
    if(weather) {
      setHourly(weather.hourly.slice(1, 6));
    }
  }, [weather]);

  return {
    hourly,
  };
};

export default useHourly;
