import getWeather from 'services/getWeather';
import getLocation from 'services/getLocation';
import getTimezone from 'services/getTimezone';
import getNameDay from 'services/getNameDay';

describe('Testing services', () => {
  it('Testing getLocation', () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getLocation((result) => {
        expect(result).toBe({ latitude, longitude });
      });
    });
  });

  it('Testing getTimezone', () => {
    expect(getTimezone('America/Araguaina')).toBe('Araguaina, America');
    expect(getTimezone('America/Argentina/Buenos_Aires')).toBe(
      'Buenos Aires, Argentina'
    );
    expect(getTimezone('America/Argentina/Catamarca')).toBe(
      'Catamarca, Argentina'
    );
  });

  it('Testing getNameDay', () => {
    expect(getNameDay(0)).toBe('Sun');
  });

  it('Testing getWeather', () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords,

        result = await getWeather(latitude, longitude);

      expect(result).toBeCalledWith(
        expect.objectContaining({
          lat: expect.any(Number),
          lon: expect.any(Number),
        })
      );

      expect(result).not.toBeCalledWith(
        expect.objectContaining({
          cod: 401,
          message:
            'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.',
        })
      );

      expect(result).not.toBeCalledWith(
        expect.objectContaining({
          cod: 400,
          message: 'wrong latitude',
        })
      );

      expect(result).not.toBeCalledWith(
        expect.objectContaining({
          cod: 400,
          message: 'wrong longitude',
        })
      );
    });
  });
});
