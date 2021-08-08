const ENDPOINT = 'https://api.openweathermap.org/data/2.5/onecall?';

const getWeather = (lat, lon) =>
  fetch(
    `${ENDPOINT}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    {
      header: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());

export default getWeather;
