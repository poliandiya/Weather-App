const BASE_URL_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY_WEATHER = '3ce3d19e821ae1cfed5238064639d347';

const BASE_URL_IMAGE = 'https://api.unsplash.com/search/photos';
const API_KEY_IMAGE = 'sLA1J7rLSOnQRBwTB99y8MOtUPCcD4p-X60zGQpIf5c';

export const getWeather = async (city, country) => {
  return await fetch(`${BASE_URL_WEATHER}?q=${city},${country}&appid=${API_KEY_WEATHER}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        if (res.status === 404) {
          return alert("No such place");
        }
        alert("Error! Error!");
        throw new Error("Found an error!");
      }
    })
    .then((object) => {
      return object;
    })
    .catch((error) => console.log(error));
};

export const getImage = async (city) => {
  return await fetch(`${BASE_URL_IMAGE}?query=${city}&client_id=${API_KEY_IMAGE}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("No such place");
      }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};
