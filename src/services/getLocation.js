const getLocation = (callback) => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    callback({ latitude, longitude });
  });
};

export default getLocation;