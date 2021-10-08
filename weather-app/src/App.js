import React from 'react';
import { Form } from './components/Form.jsx';
import { Weather } from './components/Weather.jsx';
import { getWeather, getImage } from './api.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import "weather-icons/css/weather-icons.css";
import './App.css';

class App extends React.Component {
  state = {
    city: "",
    country: "",
    icon: "",
    temp_celsius: 0,
    temp_max: 0,
    temp_min: 0,
    description: "",
    error: "",
    image: "",
  };

  weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-shower",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
  };

  getWeatherIcon = (ID) => {
    switch (true) {
      case ID >= 200 && ID <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case ID >= 300 && ID <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case ID >= 500 && ID <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case ID >= 600 && ID <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case ID >= 701 && ID <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case ID === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case ID >= 801 && ID <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    };
  };

  calcCelsius = (temp) => Math.floor(temp - 273.15);

  loadWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      const response = await getWeather(city.toLowerCase(), country.toLowerCase());
      const img = await getImage(city);

      console.log(response);
      console.log(img);

      this.getWeatherIcon(response.weather[0].id);

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        temp_celsius: this.calcCelsius(response.main.temp),
        temp_max: this.calcCelsius(response.main.temp_max),
        temp_min: this.calcCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error: false,
        image: img.results[0].urls.raw,
      });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const { city, temp_celsius, temp_max, temp_min, description, icon, error, image } = this.state;
    return (
      <div className="App">
        <Form
          loadWeather={this.loadWeather}
          error={error}
        />
        <Weather
          city={city}
          temp_celsius={temp_celsius}
          temp_max={temp_max}
          temp_min={temp_min}
          description={description}
          weatherIcon={icon}
        />
        {city &&
          <img className="app__image" src={image} alt={`${city} img`} />
        }
      </div>
    );
  }
}

export default App;
