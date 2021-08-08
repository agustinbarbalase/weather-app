import { useContext, useEffect, useState } from 'react';
import Context from 'context/WeatherContext';

import getTimezone from 'services/getTimezone';

const useCurrent = () => {
  const { weather } = useContext(Context),
    [current, setCurrent] = useState(),
    [timezone, setTimezone] = useState();

  useEffect(() => {
    if(weather) {
      setTimezone(getTimezone(weather.timezone));
      setCurrent(weather.current);
    }
  }, [weather]);

  return {
    current,
    timezone
  };
};

export default useCurrent;