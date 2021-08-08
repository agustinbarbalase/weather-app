import { useContext, useEffect, useState } from 'react';
import Context from 'context/WeatherContext';

const useDaily = () => {
  const { weather } = useContext(Context),
    [daily, setDaily] = useState();

  useEffect(() => {
    if(weather) {
      setDaily(weather.daily.slice(1, 6));
    }
  }, [weather]);

  return {
    daily
  };
};

export default useDaily;