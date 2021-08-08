import { useEffect, useState } from 'react';

import getLocation from 'services/getLocation';

const useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    getLocation(setLocation);
  }, []);

  return {
    location,
  };
};

export default useLocation;
