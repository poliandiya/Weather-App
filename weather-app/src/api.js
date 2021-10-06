const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '3ce3d19e821ae1cfed5238064639d347';

export const getWeather = async (city, country) => {
  const response = await fetch(`${BASE_URL}?q=${city},${country}&appid=${API_KEY}`);

  return response.json();
};
