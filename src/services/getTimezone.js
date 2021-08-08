const getTimezone = (timezone) => timezone
  .split('/')
  .reverse()
  .slice(0, 2)
  .map((item) => item.replace('_', ' '))
  .join(', ');

export default getTimezone;
